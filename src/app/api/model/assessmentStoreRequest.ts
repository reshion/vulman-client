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

import { AssessmentLifecycleStatus } from './assessmentLifecycleStatus';
import { RiskResponseLifecycleStatus } from './riskResponseLifecycleStatus';

import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class AssessmentStoreRequest { 


    /**
     * Name of the new Assessment
     */
    @Expose()
    name!: string;
    @Expose()
    lifecycle_status!: AssessmentLifecycleStatus;
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
     * Risk Response name of the Assessment
     */
    @Expose()
    risk_response_name!: string;
    @Expose()
    risk_response_lifecycle_status!: RiskResponseLifecycleStatus;

    /**
     * Description: Name of the new Assessment
     * datatype: string
     * datatypeWithEnum: string
     * name: string   
     */
    /**
     * datatype: AssessmentLifecycleStatus
     * datatypeWithEnum: AssessmentLifecycleStatus
     * lifecycle_status: AssessmentLifecycleStatus   
     */
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
    /**
     * Description: Risk Response name of the Assessment
     * datatype: string
     * datatypeWithEnum: string
     * risk_response_name: string   
     */
    /**
     * datatype: RiskResponseLifecycleStatus
     * datatypeWithEnum: RiskResponseLifecycleStatus
     * risk_response_lifecycle_status: RiskResponseLifecycleStatus   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<AssessmentStoreRequest> = {}) {
         
            
                    init.name ? this.name = init.name : null,
               
                        init.lifecycle_status ? this.lifecycle_status = init.lifecycle_status : null,
            
                    init.company_id ? this.company_id = init.company_id : null,
               
            
                    init.system_group_id ? this.system_group_id = init.system_group_id : null,
               
            
                    init.asset_id ? this.asset_id = init.asset_id : null,
               
            
                    init.risk_response_name ? this.risk_response_name = init.risk_response_name : null,
               
                        init.risk_response_lifecycle_status ? this.risk_response_lifecycle_status = init.risk_response_lifecycle_status : null
    }

    static   getForm(data?: AssessmentStoreRequest | AssessmentStoreRequest[] | null): FormGroup {


        if(!data) {
            return AssessmentStoreRequest.getFormGroup(new AssessmentStoreRequest());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => AssessmentStoreRequest.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  AssessmentStoreRequest.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: AssessmentStoreRequest): FormGroup {
       
        return new FormGroup({           
                        name: new FormControl(data?.name, []),
                        lifecycle_status: new FormControl(data?.lifecycle_status, []),
                        company_id: new FormControl(data?.company_id, [Validators.pattern('^[0-9]*$')]),
                        system_group_id: new FormControl(data?.system_group_id, [Validators.pattern('^[0-9]*$')]),
                        asset_id: new FormControl(data?.asset_id, [Validators.pattern('^[0-9]*$')]),
                        risk_response_name: new FormControl(data?.risk_response_name, []),
                        risk_response_lifecycle_status: new FormControl(data?.risk_response_lifecycle_status, [])
        });
    }
  

}