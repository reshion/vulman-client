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
import { NamedBaseModel } from './namedBaseModel';
import { SystemGroupType } from './systemGroupType';

/**
 * model.mustache
 *
 * System Group model
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class SystemGroup extends NamedBaseModel { 


    @Expose()
    type!: SystemGroupType;
    /**
     * Id of the Company
     */
    @Expose()
    company_id!: number;
    @Expose()
    company!: Company;

    /**
     * datatype: SystemGroupType
     * datatypeWithEnum: SystemGroupType
     * type: SystemGroupType   
     */
    /**
     * Description: Id of the Company
     * datatype: number
     * datatypeWithEnum: number
     * company_id: number   
     */
    /**
     * datatype: Company
     * datatypeWithEnum: Company
     * company: Company   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<SystemGroup> = {}) {
        super(init)  
                        init.type ? this.type = init.type : null,
            
                    init.company_id ? this.company_id = init.company_id : null,
               
                        this.company = new Company(init.company || {})
    }

    static override  getForm(data?: SystemGroup | SystemGroup[] | null): FormGroup {


        if(!data) {
            return SystemGroup.getFormGroup(new SystemGroup());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => SystemGroup.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  SystemGroup.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static override  getFormGroup(data?: SystemGroup): FormGroup {
       
        return new FormGroup({           
                        type: new FormControl(data?.type, []),
                        company_id: new FormControl(data?.company_id, [Validators.pattern('^[0-9]*$')]),
                        company: (() => { 
                            const fg = Company.getForm(data?.company);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}