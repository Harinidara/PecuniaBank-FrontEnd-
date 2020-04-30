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
  account:Account[];
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
  account: {accountId :'', branch:'',accountType:'', amount:0}};
  accountId:String;
  constructor(private service:BankServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  DeleteAccount():void{
    this.service.DeleteAccount(this.accountId)
    .subscribe( data => {
      alert("Account deleted successfully.");

    })
  }
}
