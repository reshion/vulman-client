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

export class AssetUpdateRequest { 


    /**
     * FQDN of the new Asset
     */
    @Expose()
    fqdn!: string;
    /**
     * The unique id of the Asset
     */
    @Expose()
    unique_id!: string;
    /**
     * The operating system of the Asset
     */
    @Expose()
    operating_system!: string;

    /**
     * Description: FQDN of the new Asset
     * datatype: string
     * datatypeWithEnum: string
     * fqdn: string   
     */
    /**
     * Description: The unique id of the Asset
     * datatype: string
     * datatypeWithEnum: string
     * unique_id: string   
     */
    /**
     * Description: The operating system of the Asset
     * datatype: string
     * datatypeWithEnum: string
     * operating_system: string   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<AssetUpdateRequest> = {}) {
         
            
                    init.fqdn ? this.fqdn = init.fqdn : null,
               
            
                    init.unique_id ? this.unique_id = init.unique_id : null,
               
            
                    init.operating_system ? this.operating_system = init.operating_system : null
               
    }

    static   getForm(data?: AssetUpdateRequest | AssetUpdateRequest[] | null): FormGroup {


        if(!data) {
            return AssetUpdateRequest.getFormGroup(new AssetUpdateRequest());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => AssetUpdateRequest.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  AssetUpdateRequest.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: AssetUpdateRequest): FormGroup {
       
        return new FormGroup({           
                        fqdn: new FormControl(data?.fqdn, []),
                        unique_id: new FormControl(data?.unique_id, []),
                        operating_system: new FormControl(data?.operating_system, [])
        });
    }
  

}