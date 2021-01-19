import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer/customer.service';
import {ActivatedRoute} from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { ComponentShareService } from 'src/app/service/component-share.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit,OnDestroy {
  customerForm: FormGroup;
  cusUpdate:Customer = null;
  constructor( private msg:MessageService,public fb: FormBuilder,private customer:CustomerService,private data: ComponentShareService) { 
    this.customerForm = this.fb.group({
      id:'not set',
      name:[],
      mobile:[]
    })
  }
  ngOnDestroy(): void {
    this.data.ResetData();
  }

  ngOnInit() {
     
   this.data.Source.subscribe(data => {
      ////
      if(data!== 0){
        this.customer.getCustomer(data).subscribe(
          result=>{
            this.customerForm.patchValue({
              id:result.customer.id,
              name:result.customer.name,
              mobile:result.customer.mobile
            }); 

          },
          error=>{

          }

        );
      }
  });
}

 
  onSubmit(){
    const customer = {name:this.customerForm.value.name,mobile:this.customerForm.value.mobile};
    this.customer.addCustomer(customer).subscribe(result=>{
      if(result.status){
        alert(result.msg);
        this.customerForm.patchValue({
          id:'not set',
          name:'',
          mobile:''
        });
        this.msg.SetMessage('Loading...');
      }
    },
    error=>{
      alert(error.error.msg);
    }
    );
  }
  Update(){
    const customer = {name:this.customerForm.value.name,mobile:this.customerForm.value.mobile};
    const id = this.customerForm.value.id;
    this.customer.updateCustomer(customer,id).subscribe(result=>{
      if(result.status){
        alert(result.msg);
        this.msg.SetMessage('Loading...');
      }
    },
    error=>{
      alert(error.error.msg);
    }
    );
  }
}
