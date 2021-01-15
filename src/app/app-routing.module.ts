import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerManagerComponent } from './components/customer-manager/customer-manager.component';
import { DetailsComponent } from './components/customer-manager/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './system/login/login.component';
import {FormComponent} from './components/customer-manager/form/form.component';
import { RegisterComponent } from './system/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'customer',component:CustomerManagerComponent},
  {path:'customer/details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
