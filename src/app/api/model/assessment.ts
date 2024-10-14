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

import { AssessmentLifecycleStatus } from './assessmentLifecycleStatus';
import { AssessmentTreatment } from './assessmentTreatment';
import { Asset } from './asset';
import { BaseModel } from './baseModel';
import { Company } from './company';
import { RiskResponseLifecycleStatus } from './riskResponseLifecycleStatus';
import { SystemGroup } from './systemGroup';
import { Vulnerability } from './vulnerability';

/**
 * model.mustache
 *
 * Assessment model
 */
import { Observable }                                        from 'rxjs';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators }                            from '@angular/forms';

export class Assessment extends BaseModel { 


    /**
     * Some notes of the Assessment
     */
    @Expose()
    note!: string;
    /**
     * Created date of the Assessment
     */
    @Expose()
    created!: string;
    @Expose()
    lifecycle_status!: AssessmentLifecycleStatus;
    @Expose()
    risk_response_lifecycle_status!: RiskResponseLifecycleStatus;
    @Expose()
    treatment!: AssessmentTreatment;
    /**
     * Company's id of the Assessment
     */
    @Expose()
    company_id!: number;
    @Expose()
    company!: Company;
    /**
     * Vulnerability's id of the Assessment
     */
    @Expose()
    vulnerability_id!: number;
    @Expose()
    vulnerability!: Vulnerability;
    /**
     * Asset's id of the Assessment
     */
    @Expose()
    asset_id!: number;
    @Expose()
    asset!: Asset;
    /**
     * System Group's id of the Assessment
     */
    @Expose()
    system_group_id!: number;
    @Expose()
    system_group!: SystemGroup;
    /**
     * Risk Response name of the Assessment
     */
    @Expose()
    risk_response_name!: string;

    /**
     * Description: Some notes of the Assessment
     * datatype: string
     * datatypeWithEnum: string
     * note: string   
     */
    /**
     * Description: Created date of the Assessment
     * datatype: string
     * datatypeWithEnum: string
     * created: string   
     */
    /**
     * datatype: AssessmentLifecycleStatus
     * datatypeWithEnum: AssessmentLifecycleStatus
     * lifecycle_status: AssessmentLifecycleStatus   
     */
    /**
     * datatype: RiskResponseLifecycleStatus
     * datatypeWithEnum: RiskResponseLifecycleStatus
     * risk_response_lifecycle_status: RiskResponseLifecycleStatus   
     */
    /**
     * datatype: AssessmentTreatment
     * datatypeWithEnum: AssessmentTreatment
     * treatment: AssessmentTreatment   
     */
    /**
     * Description: Company's id of the Assessment
     * datatype: number
     * datatypeWithEnum: number
     * company_id: number   
     */
    /**
     * datatype: Company
     * datatypeWithEnum: Company
     * company: Company   
     */
    /**
     * Description: Vulnerability's id of the Assessment
     * datatype: number
     * datatypeWithEnum: number
     * vulnerability_id: number   
     */
    /**
     * datatype: Vulnerability
     * datatypeWithEnum: Vulnerability
     * vulnerability: Vulnerability   
     */
    /**
     * Description: Asset's id of the Assessment
     * datatype: number
     * datatypeWithEnum: number
     * asset_id: number   
     */
    /**
     * datatype: Asset
     * datatypeWithEnum: Asset
     * asset: Asset   
     */
    /**
     * Description: System Group's id of the Assessment
     * datatype: number
     * datatypeWithEnum: number
     * system_group_id: number   
     */
    /**
     * datatype: SystemGroup
     * datatypeWithEnum: SystemGroup
     * system_group: SystemGroup   
     */
    /**
     * Description: Risk Response name of the Assessment
     * datatype: string
     * datatypeWithEnum: string
     * risk_response_name: string   
     */

    // validations?: Map<string, Array<{[key: string]: string}>> = new Map<string, Array<{[key: string]: string}>>();

    constructor(init: Partial<Assessment> = {}) {
        super(init)  
            
                    init.note ? this.note = init.note : null,
               
            
                    init.created ? this.created = init.created : null,
               
                        init.lifecycle_status ? this.lifecycle_status = init.lifecycle_status : null,
                        init.risk_response_lifecycle_status ? this.risk_response_lifecycle_status = init.risk_response_lifecycle_status : null,
                        init.treatment ? this.treatment = init.treatment : null,
            
                    init.company_id ? this.company_id = init.company_id : null,
               
                        this.company = new Company(init.company || {}),
            
                    init.vulnerability_id ? this.vulnerability_id = init.vulnerability_id : null,
               
                        this.vulnerability = new Vulnerability(init.vulnerability || {}),
            
                    init.asset_id ? this.asset_id = init.asset_id : null,
               
                        this.asset = new Asset(init.asset || {}),
            
                    init.system_group_id ? this.system_group_id = init.system_group_id : null,
               
                        this.system_group = new SystemGroup(init.system_group || {}),
            
                    init.risk_response_name ? this.risk_response_name = init.risk_response_name : null
               
    }

    static override  getForm(data?: Assessment | Assessment[] | null): FormGroup {


        if(!data) {
            return Assessment.getFormGroup(new Assessment());
        }

         if(Array.isArray(data)) {
            let arrayForm = new FormArray<any>([]);
            
            if(data.length > 0) {
                arrayForm =  new FormArray<any>(data.map(item => Assessment.getFormGroup(item)));                
            }
            return new FormGroup({
                arrayForm
            });        
        } else {
             return  Assessment.getFormGroup(data);
        }       
     
    }

     /**
   * Get FormGroup
   *
   * @param {object} data
   * @returns {FormGroup}
   */
  static override  getFormGroup(data?: Assessment): FormGroup {
       
        return new FormGroup({           
                        note: new FormControl(data?.note, []),
                        created: new FormControl(data?.created, []),
                        lifecycle_status: new FormControl(data?.lifecycle_status, []),
                        risk_response_lifecycle_status: new FormControl(data?.risk_response_lifecycle_status, []),
                        treatment: new FormControl(data?.treatment, []),
                        company_id: new FormControl(data?.company_id, [Validators.pattern('^[0-9]*$')]),
                        company: (() => { 
                            const fg = Company.getForm(data?.company);
                            fg.addValidators([]);
                            return fg;
                        })(),
                        vulnerability_id: new FormControl(data?.vulnerability_id, [Validators.pattern('^[0-9]*$')]),
                        vulnerability: (() => { 
                            const fg = Vulnerability.getForm(data?.vulnerability);
                            fg.addValidators([]);
                            return fg;
                        })(),
                        asset_id: new FormControl(data?.asset_id, [Validators.pattern('^[0-9]*$')]),
                        asset: (() => { 
                            const fg = Asset.getForm(data?.asset);
                            fg.addValidators([]);
                            return fg;
                        })(),
                        system_group_id: new FormControl(data?.system_group_id, [Validators.pattern('^[0-9]*$')]),
                        system_group: (() => { 
                            const fg = SystemGroup.getForm(data?.system_group);
                            fg.addValidators([]);
                            return fg;
                        })(),
                        risk_response_name: new FormControl(data?.risk_response_name, [])
        });
    }
  

}