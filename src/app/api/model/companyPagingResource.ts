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

import { Company } from './company';
import { Meta } from './meta';

/**
 * model.mustache
 *
 * CompanyPagingResource
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class CompanyPagingResource { 


    /**
     * Data wrapper
     */
    @Expose()
    @Type(() => Company)
    data!: Array<Company>;
    @Expose()
    meta!: Meta;

    /**
     * Description: Data wrapper
     * Complex type: Company
     * datatype: Array&lt;Company&gt;
     * datatypeWithEnum: Array&lt;Company&gt;
     * data: Array<Company>   
     */
    /**
     * datatype: Meta
     * datatypeWithEnum: Meta
     * meta: Meta   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<CompanyPagingResource> = {}) {
         
                            this.data = init.data?.map(x => new Company(x)) || [] ,
                        this.meta = new Meta(init.meta || {})
    }

    static   getForm(data?: CompanyPagingResource | CompanyPagingResource[] | null): FormGroup {


        if(!data) {
            return CompanyPagingResource.getFormGroup(new CompanyPagingResource());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => CompanyPagingResource.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  CompanyPagingResource.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: CompanyPagingResource): FormGroup {
       
        return new FormGroup({           
                        meta: (() => { 
                            const fg = Meta.getForm(data?.meta);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}