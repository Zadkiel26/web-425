/**
 * Title: sign-in.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/4/2024
 * Description: Sign in component
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
