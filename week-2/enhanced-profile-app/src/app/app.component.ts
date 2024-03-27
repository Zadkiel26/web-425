/**
 * Title: app.components.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 3/27/2024
 * Description: App typescript file
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn : boolean = true;
  assignment : string = "Exercise 2.3 - Data Binding";
}
