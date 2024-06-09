import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { EMPTY, catchError } from 'rxjs';
interface LoginForm
{
  email: FormControl<string>;
  password: FormControl<string>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent
{
  hide = true;
  formGroup: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private los: LoadingOverlayService,
  )
  {
    /** @ts-ignore */
    window['LoginComponent'] = this;
    this.formGroup = this.fb.group({
      email: new FormControl<string>('test@example.com', [Validators.required, Validators.email]),
      password: new FormControl<string>('password', Validators.required)
    }) as FormGroup<LoginForm>;
  }

  login()
  {
    this.los.show();
    if (this.formGroup.valid)
    {
      const formValues = this.formGroup.value as { email: string; password: string };

      this.authService.login(formValues.email, formValues.password).pipe(
        catchError(x =>
        {
          this.formGroup.controls.password.reset();
          console.error(x);
          return EMPTY;
        })
      ).subscribe(
        x =>
        {
          this.authService.loadUser();
          this.router.navigate(['/']);
        }
      ).add(() => this.los.hide());
    }
  }
}
