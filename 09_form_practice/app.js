const express = require("express");
const app = express();
const PORT = 9000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 view 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

// 두번째 문제 id, pw 지정
const realId = "banana";
const realPw = "4321";

app.get("/", function (req, res) {
  console.log(req.query);
  //   res.send(req.query);
  res.render("index");
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/practice2", (req, res) => {
  console.log(req.body); // {userId: 'aa', userPw:'aaa'}

  if (realId === req.body.userId && realPw === req.body.userPw) {
    // 정답 아이디/ 비밀번호 vs 사용자가 폼에 입력한 아이디 / 비밀번호
    // 정답 아이디랑 사용자가 입력한 아이디가 같고. 정답 비번이랑 사용자가 입력한 비번이 같음
    // => 로그인
    // 그렇지 않으면
    // => 로그인 실패

    res.send({ isLogin: true, userInfo: req.body });
  } else {
    //그렇지 않으면
    // => 로그인 실패
    res.send({ isLogin: false });
  }
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
