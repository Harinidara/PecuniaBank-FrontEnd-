import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Customer } from './Customer';




@Injectable({
  providedIn: 'root'
})




export class BankServiceService {

  constructor(private http:HttpClient) { }
  acc:Account;
  cus:Customer;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public AddAccount(cus){
    console.log(cus);
    return this.http.post("http://localhost:8033/addservice/create",cus,{headers: this.headers});
  }
  ShowAccountDetails(accountId:String){    
    return this.http.get("http://localhost:9983/detailsservice/find/"+accountId,{responseType: 'json'});
  }
  public UpdateAccount(accountId:String,customerName:String,contactNumber:String,address:String)
  {
 return this.http.put("http://localhost:9980/updateservice/update/"+accountId+"/"+customerName+"/"+contactNumber+"/"+address,{responseType:'text'});
  }
  public DeleteAccount(accountId:String){
    return this.http.delete("http://localhost:9985/deleteservice/delete/"+accountId,{responseType:'text'});
  }
}
