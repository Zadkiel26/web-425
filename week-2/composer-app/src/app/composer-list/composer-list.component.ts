/**
 * Title: composer-list.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 3/30/2024
 * Description: Composer-list component Typescript file
 */
import { Component, OnInit } from '@angular/core';

export class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Composer[];

  constructor() {
    this.composers = [
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Baroque'),
      new Composer('Pyotr Ilyich Tchaikovsky', 'Romantic'),
      new Composer('Claude Debussy', 'Impressionist')
    ];
  }

  ngOnInit(): void {
  }

}
