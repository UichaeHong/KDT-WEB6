// 클래스
// => 객체 생성 템플릿 => 객체를 만들기 위해 사용

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name; // 값 할당
    this.age = age;
  }

  // 메소드
  mew() {
    console.log("야옹");
  }
  // 메소드2
  eat() {
    console.log("밥 먹자");
  }
}

// 위에 있는 클래스 사용하기
let navi = new Cat("나비", 1);
navi.mew();
navi.eat();

// class가 없던 시절
let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};

let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};

let tv3 = {
  name: "ccc tv",
  size: "56inch",
};
console.log(tv1.price, tv2.price, tv3.price);

// 클래스 등장
class TV {
  name = "";
  price = 0;
  size = "";

  constructor(name, price, size) {
    // this: 여기 클래스 안에 있는 속성
    // this.name : 이 클래스 안에 있는 name
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getPrice() {
    return this.price + "만원";
  }
  // 값 바꾸기
  setPrice(price) {
    this.price = price;
  }
}

const newTV1 = new TV("aaa tv", 2000, "56inch");
// console.log(newTV1.getPrice());
newTV1.setPrice(4000);
console.log(newTV1.getPrice());

// 하위클래스
class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

// Laptop이라는 클래스를 만드려고 하는데 상위 클래스(Product)의 값을 상속 받고 싶을 때
// => 상속 : 부모클래스(Product)로부터 변수, 메소드를 가져와서(Laptop) 사용하는 개념
// 상속 받고 싶을 때는 "새로운 클래스명" "extends" "상속 받은 클래스명" 순서대로 작성
class Laptop extends Product {
  weight = "";

  constructor(name, price, weight) {
    // 상속받는 부모 클래스 값을 받음 => super , this x
    super(name, price);
    this.weight = weight;
  }
}
let laptop = new Laptop("삼성tv", 5000, "55");
// console.log(laptop.price);
console.log(laptop.getPrice());
// 부모 클래스는 자식 클래스의 값을 사용하지 못함
let parent = new Product("tv", 1000);
console.log(parent.weight);

// 파라미터 => 함수에 값을 던져줄 때 사용

// 하위클래스 연습하기
// class Pro extends Laptop {
//   width = "";
//   constructor(name, price, weight, width) {
//     super(name, price, weight);
//     this.width = width;
//   }
//   getweight() {
//     return this.weight;
//   }
//   getwidth() {
//     return this.width + "센치";
//   }
// }

// let pro = new Pro("삼성", 6000, "70inch", "50");
// console.log(pro.getPrice(), pro.getweight(), pro.getwidth());
