import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) =>
{
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) 
  {
    return true;
  } else 
  {
    inject(Router).navigate(['/login']);
    return false;
  }
};
