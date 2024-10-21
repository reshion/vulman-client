import { Component, Input, OnInit } from '@angular/core';
import * as API from 'src/app/api';

@Component({
  selector: 'app-assessment-indicator',
  templateUrl: './assessment-indicator.component.html',
  styleUrls: ['./assessment-indicator.component.scss']
})
export class AssessmentIndicatorComponent 
{
  @Input() assessments?: API.Assessment[];
  constructor(

  ) { }

}
