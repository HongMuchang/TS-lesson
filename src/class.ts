class Person {
  constructor(public name: string, protected age: number) {} //継承先でも使えるprotected

  incrementAge() {
    return console.log((this.age += 1));
  }
  greeting(this: Person) {
    return console.log(`Hello My name is ${this.name}:${this.age}`);
  }
}

const quill = new Person("Quill", 30);
quill.greeting();

//---継承---
//もし継承先でconstructorの引数を足したい時はsuperを用いる(subject)
//①constructerの引数に型宣言
//②superに継承元の引数を記入

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  greeting() {
    return console.log(
      `Hello My name is ${this.name}:${this.age}:teach${this.subject}`
    );
  }
}

//subjectがたされてる
const teacher = new Teacher("qiill", 20, "Math");
teacher.greeting();
