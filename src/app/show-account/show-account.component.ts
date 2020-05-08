import { Component, OnInit } from '@angular/core';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
  account: {accountId :'', branch:'',accountType:'', amount:0,lastUpdated:null}};
  accounts:any;
  accountId:String;
  check:boolean=false;
  constructor(private service:BankServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  fetch(){
    console.log(this.accountId);
    this.service.ShowAccountDetails(this.accountId).subscribe((data)=>{
      this.accounts=data;
      console.log(this.accounts);
    this.customer=this.accounts;
    console.log('customer:',this.customer);
    if(this.customer==null){
      alert("no accountId");
    }
    else{
      this.check=true;
      console.log(this.customer.account.accountId);
        
     
    }
  
  
});
}
}