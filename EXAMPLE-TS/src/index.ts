import { Person } from './models/person';

function sayHello(): void {
    console.log('Hello');
}

var person1: Person = new Person('Jane', 'Doe');
var greet: string = person1.greet();