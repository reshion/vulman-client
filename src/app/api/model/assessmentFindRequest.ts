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


import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class AssessmentFindRequest { 


    /**
     * The company id of the Assessment
     */
    @Expose()
    company_id: number | undefined;
    /**
     * The system group id of the Assessment
     */
    @Expose()
    system_group_id: number | undefined;
    /**
     * The asset id of the Assessment
     */
    @Expose()
    asset_id: number | undefined;

    /**
     * Description: The company id of the Assessment
     * Nullable property
     * datatype: number
     * datatypeWithEnum: number
     * company_id: number   
     */
    /**
     * Description: The system group id of the Assessment
     * Nullable property
     * datatype: number
     * datatypeWithEnum: number
     * system_group_id: number   
     */
    /**
     * Description: The asset id of the Assessment
     * Nullable property
     * datatype: number
     * datatypeWithEnum: number
     * asset_id: number   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<AssessmentFindRequest> = {}) {
         
            
                    init.company_id ? this.company_id = init.company_id : null,
               
            
                    init.system_group_id ? this.system_group_id = init.system_group_id : null,
               
            
                    init.asset_id ? this.asset_id = init.asset_id : null
               
    }

    static   getForm(data?: AssessmentFindRequest | AssessmentFindRequest[] | null): FormGroup {


        if(!data) {
            return AssessmentFindRequest.getFormGroup(new AssessmentFindRequest());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => AssessmentFindRequest.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  AssessmentFindRequest.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: AssessmentFindRequest): FormGroup {
       
        return new FormGroup({           
                        company_id: new FormControl(data?.company_id, [Validators.pattern('^[0-9]*$')]),
                        system_group_id: new FormControl(data?.system_group_id, [Validators.pattern('^[0-9]*$')]),
                        asset_id: new FormControl(data?.asset_id, [Validators.pattern('^[0-9]*$')])
        });
    }
  

}