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

export class SystemGroupStoreRequest { 


    /**
     * Name of the new system group
     */
    @Expose()
    name!: string;
    /**
     * The company id
     */
    @Expose()
    company_id!: number;

    /**
     * Description: Name of the new system group
     * datatype: string
     * datatypeWithEnum: string
     * name: string   
     */
    /**
     * Description: The company id
     * datatype: number
     * datatypeWithEnum: number
     * company_id: number   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<SystemGroupStoreRequest> = {}) {
         
            
                    init.name ? this.name = init.name : null,
               
            
                    init.company_id ? this.company_id = init.company_id : null
               
    }

    static   getForm(data?: SystemGroupStoreRequest | SystemGroupStoreRequest[] | null): FormGroup {


        if(!data) {
            return SystemGroupStoreRequest.getFormGroup(new SystemGroupStoreRequest());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => SystemGroupStoreRequest.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  SystemGroupStoreRequest.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: SystemGroupStoreRequest): FormGroup {
       
        return new FormGroup({           
                        name: new FormControl(data?.name, []),
                        company_id: new FormControl(data?.company_id, [Validators.pattern('^[0-9]*$')])
        });
    }
  

}