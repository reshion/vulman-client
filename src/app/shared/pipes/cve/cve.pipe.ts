import { Pipe, PipeTransform } from '@angular/core';
import * as API from '@app/api';

@Pipe({
  name: 'cve'
})
export class CvePipe implements PipeTransform
{

  transform(value: API.Vulnerability, arg: 'baseSeverity' | 'description'): string
  {
    let cveDetails: any = {};
    if (!value)
    {
      return 'N/A';
    }

    // Try json parse cve_details
    try
    {
      cveDetails = JSON.parse(value.cve_details);
    }
    catch (e)
    {
      return 'N/A';
    }

    switch (arg)
    {
      case 'baseSeverity':
        return cveDetails?.containers?.cna?.metrics?.[0].cvssV3_1?.baseSeverity || 'N/A';
      case 'description':
        return cveDetails?.containers?.cna?.descriptions?.[0].value || 'N/A';
    }

  }

}
