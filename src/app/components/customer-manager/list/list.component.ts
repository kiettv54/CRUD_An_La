import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/service/customer/customer.service';
import * as $ from 'jquery';
import { ComponentShareService } from 'src/app/service/component-share.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  constructor( private msg:MessageService,private router:Router,private customer:CustomerService,private data:ComponentShareService) { }
  customers:Customer[];
  ngOnInit() {
    this.getAll();
    this.msg.Source.subscribe(data=>{
      this.getAll();
    });
  }
  getAll(){
    this.customer.getAllCustomer().subscribe(data=>
      {this.customers=data.customers
      });
  }
  Edit(id){
    this.data.ChangeData(id);
    this.router.navigateByUrl('/customer');

  }
  Delete(id){
    if(confirm("Are you sure to delete with id="+id)){
    this.customer.deleteCustomer(id).subscribe(result=>{
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

}
