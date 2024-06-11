import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from '@app/nav-menu/nav-menu.component';
import { SystemGroupComponent } from './system-group/system-group.component';


@NgModule({
  declarations: [
    PagesComponent,
    NavMenuComponent,
    SystemGroupComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
