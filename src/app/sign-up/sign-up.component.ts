import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {

  SignUpform = new FormGroup({
    username : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required , Validators.email]),
    address : new FormControl('',Validators.required),
    mobile : new FormControl('' , [Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    password : new FormControl('',Validators.required)
    
  });
  submitted=false;
  get username() {
    return this.SignUpform.get('username');
  }
  get email() {
    return this.SignUpform.get('email');
  }
  get address() {
    return this.SignUpform.get('address');
  }
  get mobile() {
    return this.SignUpform.get('mobile');
  }
  get password() {
    return this.SignUpform.get('password');
  }


  constructor(public nav: NavbarServiceService,private shared:SharedService) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
  }

  onSubmit(form:NgForm) {
    this.submitted = true;
    if (this.SignUpform.invalid) {
      return;
  }
  this.shared.addUserDetails(this.SignUpform.value).subscribe((result)=>{
    console.log(result)
  });
}
}