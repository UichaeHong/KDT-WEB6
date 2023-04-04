const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 폴더까지만 접근할 경우에는, 자동으로 index.js 파일을 찾아감. (index일 경우만)
const indexRouter = require("./routes");
// '/~~~~~~~~~' 모든 라우터를 /router/index.js에 정의해 놨으니
// /routers/index.js 로 이동
app.use("/", indexRouter);

app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
