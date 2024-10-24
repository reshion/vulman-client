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

import { Meta } from './meta';
import { SystemGroup } from './systemGroup';

/**
 * model.mustache
 *
 * SystemGroupPagingResource
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class SystemGroupPagingResource { 


    /**
     * Data wrapper
     */
    @Expose()
    @Type(() => SystemGroup)
    data!: Array<SystemGroup>;
    @Expose()
    meta!: Meta;

    /**
     * Description: Data wrapper
     * Complex type: SystemGroup
     * datatype: Array&lt;SystemGroup&gt;
     * datatypeWithEnum: Array&lt;SystemGroup&gt;
     * data: Array<SystemGroup>   
     */
    /**
     * datatype: Meta
     * datatypeWithEnum: Meta
     * meta: Meta   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<SystemGroupPagingResource> = {}) {
         
                            this.data = init.data?.map(x => new SystemGroup(x)) || [] ,
                            this.meta = new Meta(init.meta || {})
    }

    static   getForm(data?: SystemGroupPagingResource | SystemGroupPagingResource[] | null): FormGroup {


        if(!data) {
            return SystemGroupPagingResource.getFormGroup(new SystemGroupPagingResource());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => SystemGroupPagingResource.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  SystemGroupPagingResource.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: SystemGroupPagingResource): FormGroup {
       
        return new FormGroup({           
                        meta: (() => { 
                            const fg = Meta.getForm(data?.meta);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}