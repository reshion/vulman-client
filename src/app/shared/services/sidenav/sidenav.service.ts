import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService
{

  private sidenav!: MatSidenav;
  private sidenavInner!: MatSidenav;

  constructor() { }

  public setSidenav(sidenav: MatSidenav)
  {
    this.sidenav = sidenav;
  }

  public open()
  {
    return this.sidenav.open();
  }


  public close()
  {
    return this.sidenav.close();
  }

  public toggle(): void
  {
    this.sidenav.toggle();
  }

  public setSidenavInner(sidenav: MatSidenav)
  {
    this.sidenavInner = sidenav;
  }

  public openInner()
  {
    return this.sidenavInner.open();
  }


  public closeInner()
  {
    return this.sidenavInner.close();
  }

  public toggleInner(): void
  {
    this.sidenavInner.toggle();
  }
}
