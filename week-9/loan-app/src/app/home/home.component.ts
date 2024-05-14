/**
 * Title: home.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/11/2024
 * Description: Home component
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Welcome to Gryffin Bank';
  }

  ngOnInit(): void {
  }

}
