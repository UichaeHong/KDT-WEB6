// TODO: 컨트롤러 코드
const Signup = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  user.getSignup((result) => {
    console.log("Cuser.js >>", result);
    // => [ {}, {}, {} ]
    res.render("signup", { data: result });
  });
};

exports.practice = (req, res) => {
  const userData = User.getUserInfo();
  console.log(userData);

  if (
    userData.realId === req.body.userId &&
    userData.realPw === req.body.userPw
  ) {
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    res.send({ isLogin: false });
  }
};
