import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBaseSeverityHighlight]'
})
export class BaseSeverityHighlightDirective
{

  @Input() set appBaseSeverityHighlight(value: string)
  {
    this.changeColor(value);
  };

  constructor(private el: ElementRef)
  {

  }

  changeColor(value: any)
  {
    this.el.nativeElement.style.padding = '5px';
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.border = '3px solid black';
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.justifyContent = 'center';
    this.el.nativeElement.style.alignItems = 'center';
    this.el.nativeElement.style.margin = '2px';
    this.el.nativeElement.style.width = '80px';
    switch (value)
    {
      case 'CRITICAL':
        this.el.nativeElement.style.backgroundColor = 'red';
        break;
      case 'HIGH':
        this.el.nativeElement.style.backgroundColor = 'orange';
        break;
      case 'MEDIUM':
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.el.nativeElement.style.color = 'black';
        break;
      case 'LOW':
        this.el.nativeElement.style.backgroundColor = 'green';
        break;
      default:
        this.el.nativeElement.style.backgroundColor = 'grey';
        break;

    }
  }

}