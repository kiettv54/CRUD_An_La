import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/system/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router:Router,public fb: FormBuilder,private auth:AuthService) { 
    this.registerForm = this.fb.group({
      name:[],
      email: [],
      password: [],
      password_confirm:[]
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    const user = {name:this.registerForm.value.name,email:this.registerForm.value.email,password:this.registerForm.value.password,password_confirmation:this.registerForm.value.password_confirm};
    this.auth.register(user).subscribe(
      result => {
        if(result.status){
          alert('register success');
          this.router.navigate(['customer']);
          this.auth.login(this.registerForm.value.email,this.registerForm.value.password);
        }
       
      },
      error => {
          alert('Register failed');

       
      }
    );
  }
}
