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


/**
 * model.mustache
 *
 * BaseModel
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class BaseModel { 


    /**
     * ID
     */
    @Expose()
    id!: number;
    /**
     * Created at
     */
    @Expose()
    created_at!: string;
    /**
     * Updated at
     */
    @Expose()
    updated_at!: string;

    /**
     * Description: ID
     * datatype: number
     * datatypeWithEnum: number
     * id: number   
     */
    /**
     * Description: Created at
     * datatype: string
     * datatypeWithEnum: string
     * created_at: string   
     */
    /**
     * Description: Updated at
     * datatype: string
     * datatypeWithEnum: string
     * updated_at: string   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<BaseModel> = {}) {
         
            
                    init.id ? this.id = init.id : null,
               
            
                    init.created_at ? this.created_at = init.created_at : null,
               
            
                    init.updated_at ? this.updated_at = init.updated_at : null
               
    }

    static   getForm(data?: BaseModel | BaseModel[] | null): FormGroup {


        if(!data) {
            return BaseModel.getFormGroup(new BaseModel());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => BaseModel.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  BaseModel.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static   getFormGroup(data?: BaseModel): FormGroup {
       
        return new FormGroup({           
                        id: new FormControl(data?.id, [Validators.pattern('^[0-9]*$')]),
                        created_at: new FormControl(data?.created_at, []),
                        updated_at: new FormControl(data?.updated_at, [])
        });
    }
  

}