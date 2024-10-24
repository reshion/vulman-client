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

import { NamedBaseModel } from './namedBaseModel';
import { Tenant } from './tenant';

/**
 * model.mustache
 *
 * Company model
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class Company extends NamedBaseModel { 


    /**
     * Tenant's id of the Company
     */
    @Expose()
    tenant_id!: number;
    @Expose()
    tenant!: Tenant;

    /**
     * Description: Tenant's id of the Company
     * datatype: number
     * datatypeWithEnum: number
     * tenant_id: number   
     */
    /**
     * datatype: Tenant
     * datatypeWithEnum: Tenant
     * tenant: Tenant   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<Company> = {}) {
        super(init)  
            
                    init.tenant_id ? this.tenant_id = init.tenant_id : null,
               
                            this.tenant = new Tenant(init.tenant || {})
    }

    static override  getForm(data?: Company | Company[] | null): FormGroup {


        if(!data) {
            return Company.getFormGroup(new Company());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => Company.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  Company.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static override  getFormGroup(data?: Company): FormGroup {
       
        return new FormGroup({           
                        tenant_id: new FormControl(data?.tenant_id, [Validators.pattern('^[0-9]*$')]),
                        tenant: (() => { 
                            const fg = Tenant.getForm(data?.tenant);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}