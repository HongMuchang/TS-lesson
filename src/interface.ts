interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: "muchan",
  age: 22,
  greeting(message: string) {
    console.log(message);
  },
};
