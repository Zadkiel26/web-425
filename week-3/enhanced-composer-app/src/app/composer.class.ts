/**
 * Title: composer.class.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 04/01/2024
 * Description: Composer class file
 */
import { IComposer } from "./composer.interface";

export class Composer {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Ludwig van Beethoven', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical'
      },
      {
        composerId: 102, fullName: 'Johann Sebastian Bach', genre: 'Baroque'
      },
      {
        composerId: 103, fullName: 'Pyotr Ilyich Tchaikovsky', genre: 'Romantic'
      },
      {
        composerId: 104, fullName: 'Claude Debussy', genre: 'Impressionist'
      }
    ];
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
