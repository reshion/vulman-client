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
    tenentService.updateTenant(1, { name: 'test' }).subscribe(x =>
    {
      x.data[0]
    })
  }
}
