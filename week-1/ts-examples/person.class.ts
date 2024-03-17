/**
 * Title: person.class.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 3/17/2024
 * Description: Person class
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Zadkiel", "Rodriguez");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);