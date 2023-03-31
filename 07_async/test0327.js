// 03.27 callback -> promise로 바꾸기
function call(name) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      console.log(name);
      cb(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      console.log("back");
      cb("back");
    }, 1000);
  });
}

function sub() {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      cb("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (cb) {
    console.log(cb, "반가워 "); // console.log(`${name} 반가워`);
    return back(cb); // return back();
  })
  .then(function (cb) {
    console.log(cb, "을 실행했구나 "); // console.log(`${back}을 실행했구나`)
    return sub(cb);
  })
  .then(function (cb) {
    console.log("여기는 callback hell"); // console.log(`여기는 ${sub}`)
  });

//==================================================

// 실습문제 2 callback 지옥을 promise 로 변경하기

// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(function () {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// promise로 변경하기
function call() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "red";
      resolve();
    }, 1000);
  });
}

function orange() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "orange";
      resolve();
    }, 1000);
  });
}

function yellow() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      resolve();
    }, 1000);
  });
}
function green() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "green";
      resolve();
    }, 1000);
  });
}
function blue() {
  return new Promise(function (resolve, rejectcb) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "blue";
      resolve();
    }, 1000);
  });
}

call("red")
  .then(function () {
    return orange();
  })
  .then(function () {
    return yellow();
  })
  .then(function () {
    return green();
  })
  .then(function () {
    return blue();
  });
