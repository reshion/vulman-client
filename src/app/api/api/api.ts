export * from './tenants.service';
import { TenantsService } from './tenants.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [TenantsService, UserService];
