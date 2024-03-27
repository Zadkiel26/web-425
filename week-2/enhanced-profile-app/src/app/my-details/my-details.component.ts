/**
 * Title: my-details.components.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 3/27/2024
 * Description: My details typescript file
 */
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2024", "#CodingWithAngular", "#ngOrlando"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Zadkiel Rodriguez Alvarado", "Tacos", "Red");
  }

  ngOnInit(): void {
  }

}
