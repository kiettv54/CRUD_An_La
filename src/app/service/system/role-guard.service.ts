import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('access_token');
    const payload = decode(token);
    if(!this.auth.isAuthenticated()){
       this.router.navigate(['login']);
       return false;
     }
     if(payload['r'] !== 1){
      this.router.navigate(['home']);
       return false;
     }
    return true;

  }
}
