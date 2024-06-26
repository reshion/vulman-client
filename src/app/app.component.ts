import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  title = 'client-app';

  constructor(private authService: AuthService)
  {

  }
  ngOnInit(): void
  {
    this.authService.loadUser();
  }
}
