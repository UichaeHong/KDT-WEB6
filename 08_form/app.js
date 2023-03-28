const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

// 라우팅 : 경로 설정
// 브라우저에서 어떤 url 로 접속했을 때 어떤 페이지를 보여줄 것인가

// localhost:PORT 접속했을 때 index.ejs 를 보여주겠다
app.get("/", function (req, res) {
  //views/index  파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다~~~~";
  res.render("index", { title: myTitle });
});

app.get("/getForm", function (req, res) {
  //   console.log(req);
  console.log(req.query); //{id: , pw:}
  res.send("get 요청 성공");
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.send("post 요청 성공");
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
