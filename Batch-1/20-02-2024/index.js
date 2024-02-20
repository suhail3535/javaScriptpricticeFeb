// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Man extends Person {
//     constructor (name, age, sound, weight) {
//         // Call the constructor of the base class using super()
//         super(name, age);

//         // Add properties specific to the Man class
//         this.sound = sound;
//         this.weight = weight;
//     }
// }

// // Creating an instance of the classes
// const person1 = new Person('John', 55);
// const person2 = new Man('WOO', 20, "bark", 140);

// console.log(person1);
// console.log(person2);

class MyClass {
    constructor (property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }

    // Methods can be added to the class
    someMethod () {
        console.log(`Hello from ${this.property1,this.property2}`);
    }
}
const myObject = new MyClass('value1', 'value2');
myObject.someMethod()
