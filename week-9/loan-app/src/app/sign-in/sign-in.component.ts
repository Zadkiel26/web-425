/**
 * Title: sing-in.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/11/2024
 * Description: Sing in component
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private cookieService: CookieService, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      customerId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  get form() {
    return this.signInForm.controls;
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const customerId = parseInt(formValues.customerId);

    if (this.signInService.validate(customerId)) {
      this.cookieService.set('session_user', customerId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The customer ID you entered is invalid, please try again.';
    }
  }

}
