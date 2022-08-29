import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit
 {
  employeeForm!:FormGroup
  constructor(private formbuilder:FormBuilder) { 
    this.employeeForm=this.formbuilder.group({
      // Name:new FormControl(),
      // Email:new FormControl(),
      // Adress: new FormControl()

      Name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      Email:['',[Validators.email,Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      Adress: ['',Validators.required],
    }
    )

  }

  ngOnInit(): void
 {


  }
  formData()
  {
    console.log(this.employeeForm);
  }
}
