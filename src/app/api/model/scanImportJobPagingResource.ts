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

/**
 * model.mustache
 *
 * ScanImportJobPagingResource
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class ScanImportJobPagingResource { 


    /**
     * Data wrapper
     */
    @Expose()
    data!: Array<any>;
    @Expose()
    meta!: Meta;

    /**
     * Description: Data wrapper
     * datatype: Array&lt;any&gt;
     * datatypeWithEnum: Array&lt;any&gt;
     * data: Array<any>   
     */
    /**
     * datatype: Meta
     * datatypeWithEnum: Meta
     * meta: Meta   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<ScanImportJobPagingResource> = {}) {
         
            
                    init.data ? this.data = init.data : null,
               
                        this.meta = new Meta(init.meta || {})
    }

    static   getForm(data?: ScanImportJobPagingResource | ScanImportJobPagingResource[] | null): FormGroup {


        if(!data) {
            return ScanImportJobPagingResource.getFormGroup(new ScanImportJobPagingResource());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => ScanImportJobPagingResource.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  ScanImportJobPagingResource.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: ScanImportJobPagingResource): FormGroup {
       
        return new FormGroup({           
                        data: new FormControl(data?.data, []),
                        meta: (() => { 
                            const fg = Meta.getForm(data?.meta);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}