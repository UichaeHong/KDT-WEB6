// async / await

// 실습 1

// function name() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("kim");
//       resolve();
//     }, 1000);
//   }, 1000);
// }
// function video() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve();
//     }, 1000);
//   }, 1000);
// }
// function title() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("callback hell");
//       resolve();
//     }, 1000);
//   }, 1000);
// }

// async function exec() {
//   let test1 = await name();
//   console.log(test1 + "반가워");
//   let test2 = await video();
//   console.log(test2 + "을 실행했구나");
//   let test3 = await title();
//   console.log("여기는" + test3);
// }

// exec();
// ===================================================

// 실습 문제 풀이

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // 작업 성공시 then(name)
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back"); // 작업 성공시 then('back')
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// // promise -> async/await
// async function exec() {
//   let name = await call("kim");
//   console.log(`${name} 반가워`);

//   let result = await back();
//   console.log(`${result}을 실행했구나`);

//   let msg = await hell();
//   console.log(`여기는 ${msg}`);
// }
// exec();

// // 실습 2
// function changeBgColor(newColor) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, 1000);
//   });
// }

// // promise then() 이용
// // changeBgColor('red')
// //   .then(function () {
// //     return changeBgColor('orange');
// //   })
// //   .then(function () {
// //     return changeBgColor('yellow');
// //   })
// //   .then(function () {
// //     return changeBgColor('green');
// //   })
// //   .then(function () {
// //     return changeBgColor('blue');
// //   });

// // async/await 이용
// async function exec() {
//   await changeBgColor("red");
//   await changeBgColor("orange");
//   await changeBgColor("yellow");
//   await changeBgColor("green");
//   await changeBgColor("blue");
// }

// exec();

// 오늘 배운 거 복습하기

function non(test) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log("test");
      resolve("test");
    }, 1000);
  });
}

function body() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log("body");
      resolve("body");
    }, 1000);
  });
}

function tag() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log("tag");
      resolve("tag");
    }, 1000);
  });
}

async function dong() {
  let call1 = await non();
  console.log(call1 + "합니다");
  let body1 = await body();
  console.log(body1 + "하세요");
  let tag1 = await tag();
  console.log(tag1 + "태그");
}

dong();
