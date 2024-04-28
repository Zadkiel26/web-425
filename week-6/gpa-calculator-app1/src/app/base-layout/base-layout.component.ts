/**
 * Title: base-layout.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/26/2024
 * Description: Base layout component
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layout';
  }

  ngOnInit(): void {
  }

}
