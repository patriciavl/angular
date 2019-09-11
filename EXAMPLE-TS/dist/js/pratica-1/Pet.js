"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(birth, type) {
        this.birthday = birth;
        this._type = type;
    }
    Object.defineProperty(Animal.prototype, "birth", {
        get: function () {
            return this.birthday.toLocaleDateString();
        },
        set: function (birth) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this.type;
        },
        set: function (id) { },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, birth, type) {
        var _this = _super.call(this, birth, type) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.greet = function () {
        return "Hola, soy un perro";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, birth, type) {
        var _this = _super.call(this, birth, type) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.greet = function () {
        return "Hola, soy un cat";
    };
    return Cat;
}(Animal));
var dog = new Dog("ze", new Date(2012, 3, 7), "aaa");
var cat = new Cat("manel", new Date(2013, 7, 14), "bbb");
console.log(dog.greet());
console.log(cat.greet());
console.log(dog.name);
console.log(cat.birth);
