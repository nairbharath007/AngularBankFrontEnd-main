import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { AccountServiceService } from 'src/app/service/account-service.service';
import { DataServiceService } from 'src/app/service/data-service.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-customert-transaction',
  templateUrl: './customert-transaction.component.html',
  styleUrls: ['./customert-transaction.component.css']
})
export class CustomertTransactionComponent {


accountNumber:any 


accountStorage:any
constructor(private auth:TransactionServiceService,
  private datas:DataServiceService,
  private fetchAccount:AccountServiceService)
{
this.accountNumber=datas.accountId
if(datas.customerId !=null)
    {
      
      
      fetchAccount.AccountIdGetByCustomerId(datas.customerId).subscribe(
        {
          next:(res)=>
          {
            //here returing list
            this.accountStorage=res
            datas.accountId=this.accountStorage.accountNumber
          },
          error:(err:HttpErrorResponse)=>
          {
            console.log(err);
            console.log("account id not created");
          }
        }
      )
    }





}

  depositeShow=false
  cardDeposiet(){
   this. depositeShow=true
   this.withdrawShow=false
   this.transferShow=false
  }
  withdrawShow=false
  cardWithdraw(){
    this. depositeShow=false
    this.withdrawShow=true
    this.transferShow=false
  }
  transferShow=false
  cardTransfer(){
    this. depositeShow=false
    this.withdrawShow=false
    this.transferShow=true
  }


//deposite form validation
  depositeForm = new FormGroup({
    accountId: new FormControl('',Validators.required),
    transactionType: new FormControl('Deposit', Validators.required),
    transactionAmount: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('',Validators.required)
  });
  get accountNumberValidator()
  {
    return this.depositeForm.get('accountId')
  }
  
  get transactionTypeValidator()
  {
    return this.depositeForm.get('transactionType')
  }
  get amountValidator()
  {
    return this.depositeForm.get('transactionAmount')
  }
  
  get descriptionValidator()
  {
    return this.depositeForm.get('description')
  }

// Function to submit the form
depositeError=false
onSubmitDeposite(Formdata:any)
{
  console.log(Formdata);
 this.auth.DepositeAmount(Formdata).subscribe(
  {
    
    
    next:(data)=>
    {
      console.log(data);
      alert("Transaction success")
      location.reload();
      
    },
    error:(err:HttpErrorResponse)=>
    {
      console.log(err);
      console.log("error here");
      this.depositeError=true
      
    }
  }
 )
}
//deposite end


//

withdrawForm = new FormGroup({
  accountId: new FormControl('',Validators.required),
  transactionType: new FormControl('withdraw', Validators.required),
  transactionAmount: new FormControl('', [Validators.required, Validators.min(1)]),
  description: new FormControl('',Validators.required)
});

get waccountNumberValidator()
{
  return this.withdrawForm.get('accountId')
}

get wtransactionTypeValidator()
{
  return this.withdrawForm.get('transactionType')
}
get wamountValidator()
{
  return this.withdrawForm.get('transactionAmount')
}

get wdescriptionValidator()
{
  return this.withdrawForm.get('description')
}
withDrawError=false
onSubmitWithdraw(Formdata:any)
{
this.auth.withdrawAmount(Formdata).subscribe( 
  {
    next:(data)=>
    {
      console.log(data);
      alert("Transaction success")
      location.reload();
      
    },
    error:(err:HttpErrorResponse)=>
    {
      console.log(err);
      console.log("error here");
     this.withDrawError=true
     this.errorWithdreaMessage=err.error.message
    }
  }
)
}
errorWithdreaMessage:any
//withdraw end



//transfer Amount
transferForm = new FormGroup({
  accountId: new FormControl('',Validators.required),
  receiverId: new FormControl('', Validators.required),
  transactionType: new FormControl('Transfer', Validators.required),
  transactionAmount: new FormControl('', [Validators.required, Validators.min(1)]),
  description: new FormControl('',Validators.required)
});

get tAccountNumberValidator()
{
  return this.transferForm.get('accountId')
}

get targetAccountNumberValidator()
{
  return this.transferForm.get('receiverId')
}
get tAmountValidator()
{
  return this.transferForm.get('transactionAmount')
}

get tDescriptionValidator()
{
  return this.transferForm.get('description')
}
//showvalidAccount=false
TransferError=false
onSubmitTransfer(FormData:any)
{
  console.log(FormData)
this.auth.transferAmount(FormData).subscribe(
  {
    next:(data)=>
    {
      console.log(data);
      alert("Transaction success")
      location.reload();
      
    },
    error:(err:HttpErrorResponse)=>
    {
      console.log(err);
      console.log("error here");
    //  this.showvalidAccount=true
    console.log(err.error.message);
    this.errorMessage=err.error.message
      this.TransferError=true
      
      
    } 
  }
)
}

errorMessage:any

refreshFun()
{
  location.reload()
}


}
