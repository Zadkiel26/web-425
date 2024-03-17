/**
 * Title: app.components.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 3/17/2024
 * Description: App typescript file
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 1.5 Components";
}
