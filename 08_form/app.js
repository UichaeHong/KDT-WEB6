const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정

// 라우팅 : 경로 설정
// 브라우저에서 어떤 url 로 접속했을 때 어떤 페이지를 보여줄 것인가

// localhost:PORT 접속했을 때 index.ejs 를 보여주겠다
app.get("/", function (req, res) {
  //views/index  파일을 찾아서 응답
  res.render("index");
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
