import { Injectable } from '@angular/core';
import * as API from '@app/api';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { StorageKey } from '@app/shared/enums/storage-key.enum';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private userSubject: BehaviorSubject<API.UserResource | null> = new BehaviorSubject<API.UserResource | null>(null);
  public user$ = this.userSubject.asObservable();
  constructor(
    private userService: API.UserService,
    private storageService: StorageService,
    private router: Router,
    private los: LoadingOverlayService,
  )
  {

  }


  loadUser(): void
  {
    this.userService.current().pipe(
      tap(user => this.userSubject.next(user)),
      catchError((error: HttpErrorResponse) =>
      {
        if (error.status === 401)
        {
          // Token ist abgelaufen oder ungültig
          this.storageService.removeItem(StorageKey.TOKEN);
          this.router.navigate(['/login']);
        }
        return EMPTY
      })
    ).subscribe();
  }

  login(email: string, password: string): Observable<any>
  {
    const request = new API.LoginRequest({ email, password })
    return this.userService.login(request).pipe(
      map(response =>
      {
        this.storageService.setItem(StorageKey.TOKEN, response);
        return response;
      })
    );
  }

  getCurrentUser(): Observable<any>
  {
    return this.userService.current().pipe(
      catchError(error =>
      {
        return EMPTY
      })
    );
  }

  isLoggedIn(): boolean
  {
    return !!this.storageService.getItem(StorageKey.TOKEN);
  }

  getUser$(): Observable<API.UserResource | null>
  {
    return this.user$.pipe();
  }

  clearUser(): void
  {
    this.userSubject.next(null);
  }

  logout(): void
  {
    this.los.show();
    this.userService.logout().pipe(
      tap(() =>
      {
        // Token aus dem Storage entfernen
        this.storageService.removeItem(StorageKey.TOKEN);
        this.clearUser();
        this.router.navigate(['/login']);
      }),
      catchError((error: HttpErrorResponse) =>
      {
        console.error('Logout error:', error);
        return EMPTY
      })
    ).subscribe().add(() => this.los.hide());
  }

}
