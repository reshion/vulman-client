import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
interface IShowLoading
{
  show: boolean;
  text?: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoadingOverlayService
{

  private showLoading$: BehaviorSubject<IShowLoading> = new BehaviorSubject<IShowLoading>({ show: false });

  private disabled!: boolean;

  constructor() { }

  show(text?: string)
  {
    if (this.disabled)
    {
      return;
    }
    const showLoading: IShowLoading = {
      show: true,
      text,
    };
    this.showLoading$.next(showLoading);
  }

  hide()
  {
    this.showLoading$.next({ show: false });
  }

  hideAndDisable()
  {
    this.disable();
    this.showLoading$.next({ show: false });
  }

  disable()
  {
    this.disabled = true;
  }

  enable()
  {
    this.disabled = false;
  }


  showLoading()
  {
    return this.showLoading$.asObservable();
  }

  show$(): Observable<any>
  {
    return of(true);
  }

}
