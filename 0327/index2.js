// promise : 비동기 함수를 동기처리하기 위해 만든 객체
//성공, 실패 분리해서 반환

// 성공이든 실패든 무언가의 '최종결과'
// resolved: 성공
// rejected: 실패
// 프로미스를 콜백함수 전달할 필요 없음. 그냥 호출하면 됨

// 1. 프러미스 생성하는 코드
// promise 함수의 return 값이 promise 객체
// resolve(): 성공한 경우, 프로미스 사용시 then 메서드와 연결
// reject(): 실패한 경우, 프로미스 사용시 catch 메서드와 연결

// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `promise 상태는 fulfilled(성공)!! then으로 연결됩니다. 이때 flag는 ${flag} 입니다`
//       );
//     } else {
//       reject(
//         `promise 상태는 rejected(실패)!! catch로 연결됩니다. 이때 flag는 ${flag} 입니다`
//       );
//     }
//   });
// }

// // 2. 프로미스 사용(소비)하는 코드

// promise1(5 > 3) //true , false, 5 > 3
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//==========================================================
// index.js 에서 콜백함수를 이용해 동기처리 한 것을
// promise 이용해서 동기처리 해보자

// function goMart() {
//   console.log("마트에 가서 어떤 음료 살지 고민");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝");
//       product = "제로콜라";
//       price = 4000; //2000 -> 상품명, 가격 출력 그대로 / 4000 -> 금액 부족 메세지 출력

//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// // resolve 할 때 실행할 함수
// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// // reject 할 때 실행할 함수
// function nopay() {
//   console.log("금액 부족");
// }

// let product; //undefined
// let price; //undefined
// goMart();
// pickDrink()
//   .then(pay) //pickDrink 함수 안에서  resolve 실행시 then 으로 연결
//   .catch(nopay); //pickDrink 함수 안에서  reject 실행시 catch로 연결

// ======================================================================================

// promise 체이닝
// ex. 함수를 이용해(4 + 3) * 2 - 1 = 13 연산을 해보자
// 1. add(4, 3)
// 2. mul(add(4, 3), 2)
// 3. sub(mul(add(4, 3), 2), 1)
// add -> mul -> sub 순으로 연산 필요

// 1. 콜백함수로 해결하기
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// // add -> mul -> sub

// add(4, 3, function (x) {
//   console.log("1: ", x); // x = 4 + 3
//   mul(x, function (y) {
//     console.log("2: ", y); // y = x * 2
//     sub(y, function (z) {
//       console.log("3: ", z); // z = y - 1
//     });
//   });
// });

// step2 . promise 체이닝 이용
// 장점1. then 메서드 연속 사용 사능 -> 순차적인 작업 가능  / 콜백 지옥에서 탈출
// 장점2. 예외 처리 간편 => 마지막에 catch 구문에서 한 번에 에러 처리 가능

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      //   resolve(result);
      reject(new Error("의도적으로 에러를 일으켜봄"));
    }, 500);
  });
}

// promise 체이닝 사용해서

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  })
  .catch(function (error) {
    console.log("실패");
    console.log(error);
  });
