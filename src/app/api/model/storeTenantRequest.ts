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

export class StoreTenantRequest { 


    /**
     * Name of the new Tenant
     */
    @Expose()
    name!: string;

    /**
     * Description: Name of the new Tenant
     * datatype: string
     * datatypeWithEnum: string
     * name: string   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<StoreTenantRequest> = {}) {
         
            
                    init.name ? this.name = init.name : null
               
    }

    static   getForm(data?: StoreTenantRequest | StoreTenantRequest[] | null): FormGroup {


        if(!data) {
            return StoreTenantRequest.getFormGroup(new StoreTenantRequest());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => StoreTenantRequest.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  StoreTenantRequest.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: StoreTenantRequest): FormGroup {
       
        return new FormGroup({           
                        name: new FormControl(data?.name, [])
        });
    }
  

}