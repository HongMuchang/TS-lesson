//enum型~特定のまとまったグループを受け入れる型

//enumで定義
enum CoffeeSize {
  SHORT, //0
  TALL, //1
  GRADE, //2
  VENTI, //3
}

//sizeに4つしか選ばせない
const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
