import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
