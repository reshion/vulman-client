import { Component, Input } from '@angular/core';
import * as API from '@app/api/';
@Component({
  selector: 'app-base-severity-indicator',
  templateUrl: './base-severity-indicator.component.html',
  styleUrls: ['./base-severity-indicator.component.scss']
})
export class BaseSeverityIndicatorComponent
{
  @Input() baseSeverity!: API.BaseSeverityCountResponse;
}
