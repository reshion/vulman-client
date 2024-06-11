import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PagesComponent } from './pages/pages.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import { RouteKey } from './shared/enums/route-key';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    canActivate: [authGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: RouteKey.LOGIN,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
