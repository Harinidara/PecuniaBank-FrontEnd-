import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  account: Account[];
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accountId: String;
  accounts:any;
  constructor(private service: BankServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  DeleteAccount(): void {
    this.service.ShowAccountDetails(this.accountId).subscribe((data) => {
      this.accounts = data;
      console.log(this.accounts);
      this.customer = this.accounts;
      console.log('customer:', this.customer);
      if (this.customer == null) {
        alert("no accountId");
      }
      else
        this.service.DeleteAccount(this.accountId)
          .subscribe(data => {
            alert("Account deleted successfully.");
          });
    });
  }
}
