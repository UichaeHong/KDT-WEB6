// const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index");
});

// 1-1 ajax get 요청
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 1-2 /ajax post 요청
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. /axios get 요청
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 2-2 /axios post 요청
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3-1 /feetch get 요청
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 3-2 /fetch post 요청
app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
