/**
 * Title: home.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/4/2024
 * Description: Home component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assignment : string = "Assignment 3.4 - Guarding Routes";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
