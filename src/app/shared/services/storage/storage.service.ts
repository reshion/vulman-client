import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageKey } from 'src/app/shared/enums/storage-key.enum';

interface IMessage
{
  action: string;
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService
{

  private trigger$ = new BehaviorSubject(true);


  constructor()
  {

  }


  getCookieValue = (key: string) =>
    document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)')?.pop() || '';

  /**
   * Get item from storage
   * @param key key accessor.
   * @returns T generic type
   */
  getItem<T>(key: any): T
  {
    return localStorage.getItem(key) as unknown as T;
  }
  /**
   * Get item from storage async
   * @param key key accessor.
   * @returns T generic type observable.
   */
  getItem$<T>(key: any): Observable<T>
  {
    return this.trigger$.pipe(
      map(x => localStorage.getItem(key) as unknown as T)
    );
  }

  /**
   * Set item to storage.
   * @param key key accessor.
   * @param value value.
   */
  setItem(key: StorageKey, value: string): void
  {
    localStorage.setItem(key, value);
    this.trigger$.next(true);
  }

  /**
   * Remove item from storage.
   * @param key key accessor.
   */
  removeItem(key: StorageKey): void
  {
    localStorage.removeItem(key);
    this.trigger$.next(true);
  }
}
