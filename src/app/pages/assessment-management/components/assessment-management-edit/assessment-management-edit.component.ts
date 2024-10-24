import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { plainToClass } from 'class-transformer';
import { BehaviorSubject, catchError, EMPTY, map, merge, mergeMap, Observable, of, startWith, Subscription, switchMap, tap } from 'rxjs';

class ViewModel extends API.Assessment
{
  vulnerability$!: Observable<API.Vulnerability | null | -1>;
  company$!: Observable<API.Company | null | -1>;
  system_group$!: Observable<API.SystemGroup | null | -1>;
  asset$!: Observable<API.Asset | null | -1>;

}

@Component({
  selector: 'app-assessment-management-edit',
  templateUrl: './assessment-management-edit.component.html',
  styleUrls: ['./assessment-management-edit.component.scss']
})
export class AssessmentManagementEditComponent implements OnInit, AfterViewInit
{
  assessment!: ViewModel;
  subscriptions = new Subscription();
  AssessmentTreatment = API.AssessmentTreatment;
  AssessmentLifecycleStatus = API.AssessmentLifecycleStatus;
  RiskResponseLifecycleStatus = API.RiskResponseLifecycleStatus;
  formGroup!: FormGroup;
  showRiskResponseEdit = false;
  affectedAssets: API.Asset[] = [];


  constructor(
    private los: LoadingOverlayService,
    private assessmentService: API.AssessmentsService,
    private vulnerabilityService: API.VulnerabilitiesService,
    private companyService: API.CompaniesService,
    private systemGroupService: API.SystemGroupsService,
    private assetsService: API.AssetsService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group({
      id: [null],
      note: [null],
      treatment: [null],
      lifecycle_status: [API.AssessmentLifecycleStatus.OPEN],
      risk_response: [],
      risk_response_lifecycle_status: [],
    })
  }

  ngAfterViewInit(): void
  {

    this.los.show();
    this.subscriptions.add(this.activatedRoute.paramMap.pipe(
      map(params =>
      {
        // get and parse int
        const id = params.get(UrlAndQueryParamKey.ASSESSMENT_ID) || '0';
        return parseInt(id, 10);
      }),
      mergeMap(id =>
      {
        // get the asset
        return this.assessmentService.showAssessment(id);
      }),
      map(x =>
      {
        return plainToClass(ViewModel, x.data);
      }),
      map(x => this.prepareViewModel(x)),
    )
      .subscribe(assessment =>
      {
        this.assessment = assessment;
        this.formGroup.patchValue(assessment);
        this.formGroup.updateValueAndValidity();
        this.loadAffectedAssets(assessment.vulnerability_id, assessment.system_group_id);
        this.los.hide();
      }))
  }

  displayedColumns: string[] = ['id', 'fqdn', 'unique_id', 'operating_system'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Asset> = new MatTableDataSource<API.Asset>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private reload$ = new BehaviorSubject<boolean>(true);

  loadAffectedAssets(vulnerabilitiyId: number, systemGroupId: number): void
  {
    {
      this.los.show();
      this.subscriptions.add(
        merge(this.paginator.page, this.sort.sortChange, this.reload$).pipe(
          startWith({}),
          switchMap(() =>
          {
            this.los.show();
            return this.assetsService.getAssetsByVulnerability(
              vulnerabilitiyId,
              systemGroupId,
              this.paginator.pageIndex + 1,
              this.paginator.pageSize
            ).pipe(
              catchError(() => of({ data: [], meta: { total: 0 } }))
            );
          }),
          map(assets =>
          {
            this.totalItems = assets.meta.total;
            this.dataSource.data = assets.data;
          })
        ).subscribe(() =>
        {
          this.los.hide();
        }));
    }
  }

  prepareViewModel(assessment: API.Assessment): ViewModel
  {
    const viewModel = plainToClass(ViewModel, assessment);
    viewModel.vulnerability$ = viewModel.vulnerability_id ? this.vulnerabilityService.showVulnerability(viewModel.vulnerability_id).pipe(
      map(x => plainToClass(API.Vulnerability, x.data)),
      catchError(err =>
      {
        return EMPTY
      }),
    ) : of(-1);

    viewModel.company$ = viewModel.company_id ? this.companyService.showCompany(viewModel.company_id).pipe(
      map(x =>
      {
        return plainToClass(API.Company, x.data)
      }),
      catchError(err =>
      {
        return EMPTY
      }),
    ) : of(-1);

    viewModel.system_group$ = viewModel.system_group_id ? this.systemGroupService.getSystemGroup(viewModel.system_group_id).pipe(
      map(x => plainToClass(API.SystemGroup, x.data)),
      catchError(err =>
      {
        return EMPTY
      }),
    ) : of(-1);
    viewModel.asset$ = viewModel.asset_id ? this.assetsService.showAsset(viewModel.asset_id).pipe(
      map(x => plainToClass(API.Asset, x.data)),
      tap(x => this.affectedAssets.push(x)),
      catchError(err =>
      {
        return EMPTY
      }),
    ) : of(-1);

    return viewModel;
  }

  updateAssessment(assessment: ViewModel): void
  {
    assessment.risk_response = this.formGroup.controls['risk_response'].value;
    assessment.risk_response_lifecycle_status = this.formGroup.controls['risk_response_lifecycle_status'].value;
    assessment.treatment = this.formGroup.controls['treatment'].value;
    assessment.lifecycle_status = this.formGroup.controls['lifecycle_status'].value;
    this.los.show();
    const body = plainToClass(API.AssessmentUpdateRequest, assessment as Object, { excludeExtraneousValues: true });
    this.subscriptions.add(this.assessmentService.updateAssessment(assessment.id, body).subscribe(
      (assessmentRessource) =>
      {
        this.assessment = this.prepareViewModel(assessmentRessource.data);
        this.los.hide();
      }
    ))
  }

  openDeleteDialog(id: number): void
  {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: new DialogMessage(`Remove Assessment`, 'Would you like to remove the assessment?', new DialogOptions({ cancel: true }))
    });
    this.subscriptions.add(dialogRef.afterClosed().subscribe(ok =>
    {
      if (ok)
      {
        this.los.show();
        this.assessmentService.deleteAssessment(id).subscribe(() =>
        {
          this.los.hide();
          this.router.navigate(['assessment-management']);
        });
      }
    }));
  }
}
