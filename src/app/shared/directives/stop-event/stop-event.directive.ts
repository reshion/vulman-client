import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopEvent]'
})
export class StopEventDirective
{

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
    event.stopPropagation();
  }

}
