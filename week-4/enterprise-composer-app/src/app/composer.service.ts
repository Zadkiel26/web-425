/**
 * Title: composer.service.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 04/08/2024
 * Description: Composer service
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)));
  }
}
