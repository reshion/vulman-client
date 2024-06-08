import { Component } from '@angular/core';
import * as API from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'client-app';

  constructor(private tenentService: API.TenantsService)
  {


    API.Tenant.getForm();
  }
  test()
  {
    this.tenentService.showTenant(1).subscribe(x =>
    {

    })
  }
}
