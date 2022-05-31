import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.nav.doSomethingElseUseful()
  }

}
