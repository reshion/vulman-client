import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { AuthService } from '@app/shared/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) =>
{
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) 
  {
    return true;
  } else 
  {
    inject(Router).navigate([`${RouteKey.ROOT}${RouteKey.LOGIN}`]);
    return false;
  }
};
