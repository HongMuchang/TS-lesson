interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

//classにinterfaceのオブジェクトを定義するやり方

class Developer implements Human {
  constructor(public name: string, public age: number) {}
  //コンストラクタ外
  greeting(message: String) {
    console.log("Hello");
  }
}
