/**
 * Title: app.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 04/01/2024
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
