import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent {
  
  states = [
    // States
    'Andhra Pradesh',        // 1
    'Arunachal Pradesh',     // 2
    'Assam',                 // 3
    'Bihar',                 // 4
    'Chhattisgarh',          // 5
    'Goa',                   // 6
    'Gujarat',               // 7
    'Haryana',               // 8
    'Himachal Pradesh',      // 9
    'Jharkhand',             // 10
    'Karnataka',             // 11
    'Kerala',                // 12
    'Madhya Pradesh',        // 13
    'Maharashtra',           // 14
    'Manipur',               // 15
    'Meghalaya',             // 16
    'Mizoram',               // 17
    'Nagaland',              // 18
    'Odisha',                // 19
    'Punjab',                // 20
    'Rajasthan',             // 21
    'Sikkim',                // 22
    'Tamil Nadu',            // 23
    'Telangana',             // 24
    'Tripura',               // 25
    'Uttar Pradesh',         // 26
    'Uttarakhand',           // 27
    'West Bengal',           // 28
    
    // Union Territories
    'Andaman and Nicobar Islands',       // 29
    'Chandigarh',                       // 30
    'Dadra and Nagar Haveli and Daman and Diu', // 31
    'Lakshadweep',                      // 32
    'Delhi',                            // 33
    'Puducherry',                       // 34
    'Jammu and Kashmir',                // 35
    'Ladakh'                            // 36
  ];



  constructor(private customerService: CustomerServiceService,
    private datas:DataServiceService) {
      console.log(datas.customerId,"Constuctor");
      
    this.loadAllCustomers(datas.customerId);

  }
  dataStore: any;
  fetchSingleData: any;



  loadAllCustomers(data:any) {
    console.log(data,"customerId");
    
    this.customerService.getCustomerById(data).subscribe({
      next: (data) => {
        this.fetchSingleData = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching data:', error);
      }
    });
  }


  customerRegisterForm = new FormGroup({
    customerId: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userId: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    contactDetails: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}$/)]),
  });


  get firstNameValidator() { return this.customerRegisterForm.get('firstName'); }
  get lastNameValidator() { return this.customerRegisterForm.get('lastName'); }
  get emailValidator() { return this.customerRegisterForm.get('email'); }
  get customerValidator() { return this.customerRegisterForm.get('customerId'); }
  get userValidatorId() { return this.customerRegisterForm.get('userId'); }
  get stateValidator() { return this.customerRegisterForm.get('state'); }
  get genderValidator() { return this.customerRegisterForm.get('gender'); }
  get contactDetailsValidator() { return this.customerRegisterForm.get('contactDetails'); }


  
  submitData(data: any) {
    this.customerService.UpdateCustomer(data).subscribe({
      next: (response) => {
        console.log('Update Successful.', response);
        alert("Update successful:")
        
        
        
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating customer.', error);
      }
    });
  }

  // loadUpdateForm(item: any) {
  //   this.fetchSingleData = item;
  //   this.customerRegisterForm.patchValue(item);
  // }


  // closeUpdateModal() {
  //   const modal = new bootstrap.Modal(this.updateModal.nativeElement);
  //   modal.hide();
  // }

}


