import { Component, OnInit } from '@angular/core';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0,lastUpdated:null }};
    result: string;
  result1: any

  constructor(private service: BankServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  updateAccount() {
    console.log(this.customer.account.accountId);
    this.service.UpdateAccount(this.customer.account.accountId, this.customer.customerName, this.customer.contactNumber, this.customer.address)
      .subscribe((data) => 
        this.result1 = data );
        console.log(this.result1+"Hi");
        this.result = this.result1;
        if (this.result1!=null)
         {
          alert("Could not update account");
        }
        else
         {
           
           console.log(this.result1+"Hello");
           alert("Account updated successfully");
        }

     
  }

}

