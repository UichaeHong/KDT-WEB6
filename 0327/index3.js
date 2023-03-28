// async / await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반의 코드를 더 가독성 있게 하기 위해 등장

// 구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 await 키워드 붙이기 (해당 작업을 기다려 줄 것)
// async랑 await 같이 사용해야됨

/* 사용 방법
async function 함수명() {
    await 비동기처리_메서드명()
} */

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchfruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "수박", "참외"];
      resolve(fruits);
    }, 1000);
  });
}

// 방법 1 promise then() 사용시
fetchfruits().then(function (fruits) {
  console.log(fruits);
});

// 방법 2 async / await
async function printItem() {
  const fruits = await fetchfruits();
  console.log(fruits);
}

printItem();

// 에러 발생시키기

function fetchfruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "수박", "참외"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생"));
    }, 1000);
  });
}

fetchfruits()
  .then(function (fruits) {
    console.log(fruits);
  })
  .catch(function (error) {
    console.log(error);
  });

// #2 async/await 사용시
// 예외 처리 try catch 구문
// 구조
// - try 블록 코드가 실행
//  - try 블록에서 에러가 없다면, catch 블록은 건너뜀
//  - try 블록에서 에러가 있다면, try 블록 실행이 중단
//                                -> catch 블록 코드 실행
/*  
try {
  // 코드 실행 ing
  // 에러 발생시 catch 로 이동
} catch (error) {
  // 에러 관리
}
*/
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();

// #######################################################################################
// index 2 에서 작성한 코드를 async / await로 변경하기

function goMart() {
  console.log("마트에 가서 어떤 음료 살지 고민");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝");
      product = "제로콜라";
      price = 4000; //2000 -> 상품명, 가격 출력 그대로 / 4000 -> 금액 부족 메세지 출력
      resolve();
    }, 3000);
  });
}

// resolve 할 때 실행할 함수
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink(); // 2번 실행 -> 기다려줘야 함
  pay(); // 2번 실행되어야 3번 실행

  // 장점: 코드 실행 순서가 명확히 보인다
}

let product;
let price;
exec();
