const Comment = require("../model/comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comment = (req, res) => {
  console.log(req.body); // {userId: 'aa', userPw:'aaa'}

  if (userId === req.body.userId && userPw === req.body.userPw) {
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
};
