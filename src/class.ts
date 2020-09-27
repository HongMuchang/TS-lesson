//constructorの引数にアクセス修飾子を書いている

//---------------
//省略前
//---------------
class Person {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    return console.log((this.age += 1));
  }
  greeting(this: Person) {
    return console.log(`Hello My name is ${this.name}:${this.age}`);
  }
}
//---------------
//省略後
//---------------

class Person {
  constructor(public name: string, private age: number) {}

  incrementAge() {
    return console.log((this.age += 1));
  }
  greeting(this: Person) {
    return console.log(`Hello My name is ${this.name}:${this.age}`);
  }
}

const quill = new Person("Quill", 30);
quill.greeting();
