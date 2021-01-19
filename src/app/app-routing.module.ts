import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { CustomerManagerComponent } from './components/customer-manager/customer-manager.component';
import { DetailsComponent } from './components/customer-manager/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './system/login/login.component';
import {FormComponent} from './components/customer-manager/form/form.component';
import { RegisterComponent } from './system/register/register.component';
import { AuthGuardService } from './service/system/auth-guard.service';
import { RoleGuardService } from './service/system/role-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path:'customer',
    component:CustomerManagerComponent,
    canActivate:[RoleGuardService]
    },
  {path:'customer/details/:id',component:DetailsComponent,
  canActivate:[RoleGuardService]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
