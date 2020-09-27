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

//------------------------------------

class Teacher extends Person {
  //取得したときに何かの関数を実行
  get subject() {
    //subjectがないとき
    if (!this._subject) {
      throw new Error("ERROR");
    }
    return this._subject;
  }

  //値を代入,変更したときに実行
  set subject(value) {
    //subjectがないとき
    if (!value) {
      throw new Error("ERROR");
    }
    this._subject = value;
  }

  constructor(name: string, age: number, private _subject: string) {
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
teacher.subject = "aaa";
console.log(teacher.subject);

teacher.greeting();
