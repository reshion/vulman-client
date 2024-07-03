import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';
import * as API from './api/api.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { Configuration } from './api';
import { environment } from '../environments/environment';
import { TokenInterceptor } from './shared/interceptors/token/token.interceptor';
export const config = new Configuration({
  basePath: environment.API_BASE_PATH,
  withCredentials: true,
});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    API.ApiModule.forRoot(() => config),
    LayoutModule,
  ],
  exports: [
    API.ApiModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Schemas hinzufügen, falls nötig
})
export class AppModule { }
