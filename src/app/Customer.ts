export interface Customer
{
    customerName:String;
    userName:String;
    contactNumber:String;
    aadharNumber:String;
    panNumber:String;
    dateOfBirth:String;
    gender:String;
    address:String;
    account:Account;
}

export interface Account{
    accountId:String;
    branch:String;
    accountType:String;
    amount:number;
}
