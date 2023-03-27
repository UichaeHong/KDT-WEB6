function call(name, cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      console.log(name);
      cb(name);
    }, 1000);
  });
}

function back(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      console.log("back");
      cb("back");
    }, 1000);
  });
}

function sub(cb) {
  return new Promise(function (cb, reject) {
    setTimeout(function () {
      cb("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (cb) {
    console.log(cb, "반가워 ");
    return back(cb);
  })
  .then(function (cb) {
    console.log(cb, "을 실행했구나 ");
    return sub(cb);
  })
  .then(function (cb) {
    console.log("여기는 callback hell");
  });
