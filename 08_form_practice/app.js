const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

// ==================실습 문제 1 풀기=========================================

app.get("/", function (req, res) {
  res.render("index", { title: myTitle });
});
app.get("/practice1", function (req, res) {
  res.render("practice1");
});
app.get("/practice2", function (req, res) {
  res.render("practice2");
});
app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result1", {
    title: "실습1 결과 확인",
    name1: req.query.name1,
    test1: req.query.test1,
    day: req.query.day,
    text1: req.query.text1,
  });
});

// =======================여기까지 실습 문제 풀기=============================

// =======================실습 문제 2 풀기====================================

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result2", {
    title: "post 결과 확인하기",
    name1: req.body.name1,
    test1: req.body.test1,
    day: req.body.day,
    text1: req.body.text1,
    color: req.body.color,
    number: req.body.number,
  });
});

// =======================여기까지 실습 문제 풀기=============================
app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
