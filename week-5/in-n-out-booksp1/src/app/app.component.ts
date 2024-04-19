/**
 * Title: app.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/19/2024
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.3 - Navigation and Layout"
  }
}
