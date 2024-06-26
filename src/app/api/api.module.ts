import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssessmentsService } from './api/assessments.service';
import { AssetsService } from './api/assets.service';
import { CompaniesService } from './api/companies.service';
import { ImportService } from './api/import.service';
import { ScanImportJobsService } from './api/scanImportJobs.service';
import { SystemGroupsService } from './api/systemGroups.service';
import { TenantsService } from './api/tenants.service';
import { UserService } from './api/user.service';
import { VulnerabilitiesService } from './api/vulnerabilities.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AssessmentsService,
    AssetsService,
    CompaniesService,
    ImportService,
    ScanImportJobsService,
    SystemGroupsService,
    TenantsService,
    UserService,
    VulnerabilitiesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
