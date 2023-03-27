// 03.27 callback -> promise로 바꾸기
// function call(name, cb) {
//   return new Promise(function (cb, reject) {
//     setTimeout(function () {
//       console.log(name);
//       cb(name);
//     }, 1000);
//   });
// }

// function back(cb) {
//   return new Promise(function (cb, reject) {
//     setTimeout(function () {
//       console.log("back");
//       cb("back");
//     }, 1000);
//   });
// }

// function sub(cb) {
//   return new Promise(function (cb, reject) {
//     setTimeout(function () {
//       cb("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then(function (cb) {
//     console.log(cb, "반가워 ");
//     return back(cb);
//   })
//   .then(function (cb) {
//     console.log(cb, "을 실행했구나 ");
//     return sub(cb);
//   })
//   .then(function (cb) {
//     console.log("여기는 callback hell");
//   });

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
function call(name, cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "red";
      cb("call");
    }, 1000);
  });
}

function orange(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "orange";
      cb("orange");
    }, 1000);
  });
}

function yellow(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      cb("yellow");
    }, 1000);
  });
}
function green(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "green";
      cb("green");
    }, 1000);
  });
}
function blue(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "blue";
      cb("blue");
    }, 1000);
  });
}

call("kim")
  .then(function (cb) {
    return orange(cb);
  })
  .then(function (cb) {
    return yellow(cb);
  })
  .then(function (cb) {
    return green(cb);
  })
  .then(function (cb) {
    return blue(cb);
  });
