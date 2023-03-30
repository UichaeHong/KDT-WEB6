const express = require("express");
const app = express();
const PORT = 9000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

app.get("/", function (req, res) {
  console.log(req.query);
  //   res.send(req.query);
  res.render("index");
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
