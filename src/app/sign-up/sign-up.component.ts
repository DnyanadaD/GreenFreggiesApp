import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
  }

}
