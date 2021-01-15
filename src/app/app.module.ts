import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerManagerComponent } from './components/customer-manager/customer-manager.component';
import { FormComponent } from './components/customer-manager/form/form.component';
import { ListComponent } from './components/customer-manager/list/list.component';
import { DetailsComponent } from './components/customer-manager/details/details.component';
import { ItemsComponent } from './components/customer-manager/items/items.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './system/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './system/login/login.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    FormComponent,
    ListComponent,
    DetailsComponent,
    ItemsComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:function tokenGetter(){
          return localStorage.getItem('access_token');
        },
        disallowedRoutes :['http://127.0.0.1:8000/api/auth/login','http://127.0.0.1:8000/api/auth/login'],
        allowedDomains:['http://127.0.0.1:8000/api/customer/index'],
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
