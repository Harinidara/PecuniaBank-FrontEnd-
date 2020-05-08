import { Component, OnInit } from '@angular/core';
import {  BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  account:Account[];
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
   account: {accountId :'', branch:'',accountType:'', amount:0,lastUpdated:null}};
    
  constructor(private service:BankServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  AddAccount():void{
    console.log(this.customer);
    this.service.AddAccount(this.customer)
          .subscribe( data => {
            alert("Your Account was created successfully");
          });
        }
      }