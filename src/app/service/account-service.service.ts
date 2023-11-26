import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'  
})
export class AccountServiceService { 

  accountFilterTransactionUrl="https://localhost:7078/api/Account/TransactionFilter";

  accountRequestAdminUrl="https://localhost:7078/api/Account/customerAccountRequest";

  getAccountRequestUrl= "https://localhost:7078/api/Account/accounRequest";

  getAccountIdByCustomerIdUrl="https://localhost:7078/api/Account/customerIdAccountIdget"

 deleteByAccountIdUrl="https://localhost:7078/api/Account"

  setAccountInterestAdminUrl="https://localhost:7078/api/Account/AccountIntrestUpdate"

  activateAccountByIdUrl="https://localhost:7078/api/Account/activeId"

  activeAccountUrl="https://localhost:7078/api/Account/activeAccounts"

  fetchAccounDetailsUrl="https://localhost:7078/api/Account"


  requestFDAccountsUrl = "https://localhost:7078/api/Account/requestFdAccounts"


  constructor(private http:HttpClient) { }

public AccountFilter(id:any)
{
  return this.http.get(this.accountFilterTransactionUrl+"/"+id);
}

public RequestAccount(data:any)
{
  return this.http.post(this.accountRequestAdminUrl,data)
}
public ShowAccountRequest()
{
  return this.http.get(this.getAccountRequestUrl)
}

public setAccountInterest(data:any)
{
  return this.http.post(this.setAccountInterestAdminUrl,data)
}

public AccountIdGetByCustomerId(id:any)
{
  return this.http.get(this.getAccountIdByCustomerIdUrl+"/"+id)
}

public ActivateAccountById(id:any)
{
  return this.http.get(this.activateAccountByIdUrl+"/"+id)
}

public DenielAccount(data:any)
{
  return this.http.delete(this.deleteByAccountIdUrl+"/"+data)
}

public showActiveAccounts()
{
  return this.http.get(this.activeAccountUrl)
}

public FetchAccount(id:any)
{
  return this.http.get(this.fetchAccounDetailsUrl+"/"+id)
}

public CustomerRequestFD(data:any)
{
  return this.http.post(this.requestFDAccountsUrl,data)
}


}

