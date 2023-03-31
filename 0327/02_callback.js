//settimeout()
//settimeout(code, delay)

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// // console.log(2);
// console.log(3);

// // settimeout 이용하여 1초 후에 body 태그의 배경색상을 빨산색으로 바꾸기

// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
// }, 1000);

// // 1초 후에 h1 태그 글자 색상을 파란색
// function chageColor() {
//   document.querySelector("h1").style.color = "blue";
// }
// setTimeout(chageColor, 1000);

// ==============================================================
// 2. 비동기 처리

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

// function pickDrink() {
//   //3초 고민 후 선택
//   setTimeout(function () {
//     console.log("고민 끝");
//     product = "제로콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   // 앞 코드 3초간 지연으로 먼저 실행
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product; //undefined
// let price; //undefined
// goMart();
// pickDrink();
// pay(product, price);

// callback
// 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// 어떤 함수의 파마리터(매개변수, 인자)로 불림
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다");
// }

function pickDrink(callback) {
  // callback 매개변수가 될 콜백함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "제로콜라";
    price = 2000;
    callback(product, price); // 매개변수로 넘긴 콜백함수를 실행
  }, 3000);
}

// let product; //undefined
// let price; //undefined
goMart();
pickDrink(function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
});

//============================================================
// 콜백 지옥 : 콜백 함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
//가독성/ 유지보수성 하락

//1초마다 배경색이 변경되는 코드
//빨 > 주 > 노 > 초 > 파

setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
