import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { SidenavService } from 'src/app/shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit
{
  @ViewChild('drawer') public sidenav!: MatSidenav;
  showFiller = false;
  collapsed = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenavService: SidenavService,
  )
  {
  }

  ngOnInit(): void
  {
  }

  ngAfterViewInit(): void
  {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
