import { Component, OnInit } from '@angular/core';
import {  BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
  account: {accountId :'', branch:'',accountType:'', amount:0}};
  accounts:any;
  accountId:String;
  check:boolean;
  constructor(private service:BankServiceService, private router:Router) { }

  ngOnInit(): void {
  }

fetch(){
  this.service.ShowAccountDetails(this.accountId).subscribe((data)=>{
    this.accounts=data;
  this.customer=this.accounts;
  if(this.customer==null){
    this.check=false;
    alert("no accountId");
  }
  else{
    alert("succesfull");
  }  
});
}
}
