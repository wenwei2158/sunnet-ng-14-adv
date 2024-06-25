import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any = {
    email: 'user@example.com',
    password: '',
    isRememberMe: true
  }
  constructor(@Inject(DOCUMENT) private document:Document) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary')
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.document.body.classList.remove('bg-gradient-primary')
  }
  loginin(){

  }
  doSubmit(form: NgForm) {
    if (form.valid) {
      // Submit the form
    }

    if (form.invalid) {
      // Show error
    }
  }
}
