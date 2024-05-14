/**
 * Title: sign-in.service.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/13/2024
 * Description: Sing in service
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  customersIds: Array<number>;

  constructor() {
    this.customersIds = [1001, 1002, 1003, 1004, 1005];
  }

  validate(customerId: number) {
    return this.customersIds.some(id => id === customerId);
  }
}
