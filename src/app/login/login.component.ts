import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({​​​​​
  email: ['', Validators.required],});
  constructor(private fb:FormBuilder,public nav: NavbarServiceService) { }

  ngOnInit() {
    this.nav.show();
   this.nav.doSomethingElseUseful()
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.LoginForm.value);
  }
}
