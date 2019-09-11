"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./models/person");
function sayHello() {
    console.log('Hello');
}
var person1 = new person_1.Person('Jane', 'Doe');
var greet = person1.greet();
