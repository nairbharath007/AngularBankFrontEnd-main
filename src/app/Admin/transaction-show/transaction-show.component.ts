import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountServiceService } from 'src/app/service/account-service.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-transaction-show',
  templateUrl: './transaction-show.component.html',
  styleUrls: ['./transaction-show.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class TransactionShowComponent {

  transactions:any;
  accountNumberGet:any;
  constructor(private auth:TransactionServiceService,private AccountFilter:AccountServiceService){
  
  this.auth.showAllTransaction().subscribe(
    { 
      next:(data)=> 
      {
        this.transactions=data
      },
      error:(err:HttpErrorResponse)=>
      {
          console.log(err);
          
      }
    }
  )
 



    
  }


  erroShow=false
  accountForm = new FormGroup({
    accountNumber: new FormControl('', Validators.required),
    
  });
  
  get accountTypeValidator()
  {
  return this.accountForm.get('accountNumber')
  }


resultcondition=false
resultArray=false
accounts:any
  value:any
  datasss:any
  onSubmit(data: any) {
    console.log(data, "accountNumber");
  
    this.AccountFilter.AccountFilter(data.accountNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.datasss=res
        if (this.datasss.length=== 0) {
          this.erroShow = true;
        } else {
          this.erroShow = false;
          this.resultcondition = true;
          this.accounts = res;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error in fetching account data', err);
        this.erroShow = true;
      },
    });
  }
  
 


refreshfun()
{
  location.reload()
}

}
