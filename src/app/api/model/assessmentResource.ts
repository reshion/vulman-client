/**
 * API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Type, Expose } from 'class-transformer';
// @dynamic

import { Assessment } from './assessment';

import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class AssessmentResource { 


    @Expose()
    data!: Assessment;

    /**
     * datatype: Assessment
     * datatypeWithEnum: Assessment
     * data: Assessment   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<AssessmentResource> = {}) {
         
                            this.data = new Assessment(init.data || {})
    }

    static   getForm(data?: AssessmentResource | AssessmentResource[] | null): FormGroup {


        if(!data) {
            return AssessmentResource.getFormGroup(new AssessmentResource());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => AssessmentResource.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  AssessmentResource.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: AssessmentResource): FormGroup {
       
        return new FormGroup({           
                        data: (() => { 
                            const fg = Assessment.getForm(data?.data);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}