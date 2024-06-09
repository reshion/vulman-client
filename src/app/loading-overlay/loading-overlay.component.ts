import { Component, OnInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingOverlayService } from './loading-overlay.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit, OnDestroy
{
  show!: boolean;
  text!: string;
  start!: number;
  private subscriptions = new Subscription();
  constructor(private elementRef: ElementRef, private loadingOverlayService: LoadingOverlayService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit()
  {

    const s1 = this.loadingOverlayService.showLoading().pipe(

    )
      .subscribe(showLoading =>
      {
        this.show = showLoading.show;
        this.text = showLoading.text || 'Laden...';
        const width = showLoading.show ? '100%' : '0';
        this.elementRef.nativeElement.style.opacity = showLoading.show ? 1 : 0;
        this.elementRef.nativeElement.style.width = width;
        this.elementRef.nativeElement.style.marginLeft = showLoading.show ? '0' : '50%';
        this.changeDetectorRef.detectChanges();
      });
    this.subscriptions.add(s1);

  }

  /**
   * clean up.
   */
  ngOnDestroy(): void
  {
    this.subscriptions.unsubscribe();
  }

}
