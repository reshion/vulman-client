import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { plainToClass } from 'class-transformer';
import { catchError, EMPTY, map, mergeMap, Observable, of, Subscription } from 'rxjs';

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
export class AssessmentManagementEditComponent implements OnInit
{
  assessment!: ViewModel;
  subscriptions = new Subscription();
  AssessmentTreatment = API.AssessmentTreatment;
  AssessmentLifecycleStatus = API.AssessmentLifecycleStatus;

  constructor(
    private los: LoadingOverlayService,
    private assessmentService: API.AssessmentsService,
    private vulnerabilityService: API.VulnerabilitiesService,
    private companyService: API.CompaniesService,
    private systemGroupService: API.SystemGroupsService,
    private assetService: API.AssetsService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void
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
      map(x =>
      {
        x.vulnerability$ = x.vulnerability_id ? this.vulnerabilityService.showVulnerability(x.vulnerability_id).pipe(
          map(y => plainToClass(API.Vulnerability, y.data)),
          catchError(err =>
          {

            return EMPTY
          }),
        ) : of(-1);

        x.company$ = x.company_id ? this.companyService.showCompany(x.company_id).pipe(
          map(x =>
          {
            return plainToClass(API.Company, x.data)
          }),
          catchError(err =>
          {
            return EMPTY
          }),
        ) : of(-1);

        x.system_group$ = x.system_group_id ? this.systemGroupService.getSystemGroup(x.system_group_id).pipe(
          map(x => plainToClass(API.SystemGroup, x.data)),
          catchError(err =>
          {

            return EMPTY
          }),
        ) : of(-1);
        x.asset$ = x.asset_id ? this.assetService.showAsset(x.asset_id).pipe(
          map(x => plainToClass(API.Asset, x.data)),
          catchError(err =>
          {

            return EMPTY
          }),
        ) : of(-1);

        return x;
      })
    )
      .subscribe(assessment =>
      {
        this.assessment = assessment;
        this.los.hide();
      }))
  }

  setTreatment(treatment: API.AssessmentTreatment): void
  {
    this.assessment.treatment = treatment;
    this.updateAssessment(this.assessment);
  }

  setAssessmentLifecycleStatus(status: API.AssessmentLifecycleStatus): void
  {
    this.assessment.lifecycle_status = status;
    this.updateAssessment(this.assessment);
  }

  updateAssessment(assessment: ViewModel): void
  {
    this.los.show();
    const body = plainToClass(API.AssessmentStoreRequest, assessment as Object, { excludeExtraneousValues: true });
    this.subscriptions.add(this.assessmentService.storeAssessmentVulnerability(assessment.vulnerability_id, body).subscribe(
      () =>
      {
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
