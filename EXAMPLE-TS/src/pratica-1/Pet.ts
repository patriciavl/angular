interface Pet {
    name: string;
    greet(): string;
}

class Animal {
   private birthday: Date;
   private _type: string;

   constructor(birth: Date, type: string) {
       this.birthday = birth;
       this._type = type;
    }

       get birth(): string {
        return this.birthday.toLocaleDateString();
    }

    set birth(birth: string) {}

    get type(): string {
        return this.type;
    }

    set type(id: string) {}
   
}

class Dog extends Animal implements Pet {
    name: string;

    constructor(name: string, birth: Date, type: string){
    super(birth, type);
    this.name = name;
    }

    public greet(): string {
        return `Hola, soy un perro`;
    }

}

class Cat extends Animal implements Pet {
    name: string;

    constructor(name: string, birth: Date, type: string){
    super(birth, type);
    this.name = name;
    }

    public greet(): string {
        return `Hola, soy un cat`;
    }
    
}
    
    const dog = new Dog("ze", new Date(2012, 3, 7), "aaa");
    const cat = new Cat("manel", new Date(2013, 7, 14), "bbb");

    console.log(dog.greet());
    console.log(cat.greet());
    console.log(dog.name);
    console.log(cat.birth);