import { Injectable } from '@angular/core';
import
{
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageKey } from '@app/shared/enums/storage-key.enum';
import { StorageService } from '@app/shared/services/storage/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor
{

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>
  {
    const token = this.storageService.getItem(StorageKey.TOKEN);

    if (token)
    {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
