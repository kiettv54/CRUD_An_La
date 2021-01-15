import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/system/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
 
  
    constructor(private router:Router,public fb: FormBuilder,private auth:AuthService) { 
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      result => {
        if(result.access_token !== ''){
          alert('Login success');
          localStorage.setItem('access_token',result.access_token);
          this.router.navigate(['customer']);
        }
       
      },
      error => {
          alert('Username or Password is incorrect');

       
      }
    );
  }

}
