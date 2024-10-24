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

/**
 * model.mustache
 *
 * User model
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class User extends NamedBaseModel { 


    /**
     * Email verified at
     */
    @Expose()
    email_verified_at!: string;
    @Expose()
    company!: Company;

    /**
     * Description: Email verified at
     * datatype: string
     * datatypeWithEnum: string
     * email_verified_at: string   
     */
    /**
     * datatype: Company
     * datatypeWithEnum: Company
     * company: Company   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<User> = {}) {
        super(init)  
            
                    init.email_verified_at ? this.email_verified_at = init.email_verified_at : null,
               
                            this.company = new Company(init.company || {})
    }

    static override  getForm(data?: User | User[] | null): FormGroup {


        if(!data) {
            return User.getFormGroup(new User());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => User.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  User.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static override  getFormGroup(data?: User): FormGroup {
       
        return new FormGroup({           
                        email_verified_at: new FormControl(data?.email_verified_at, []),
                        company: (() => { 
                            const fg = Company.getForm(data?.company);
                            fg.addValidators([]);
                            return fg;
                        })()
        });
    }
  

}