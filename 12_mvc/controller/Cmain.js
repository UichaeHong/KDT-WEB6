const Comment = require("../model/comment");

exports.main = (req, res) => {
  res.render("index");
};

// (임시) DB로부터 받아온 댓글 목록

exports.comments = (req, res) => {
  console.log(Comment.getComments()); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
  res.render("comments", { commentInfos: Comment.getComments() });
};

// exports.comment = (req, res) => {
//   console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
//   console.log(req.params.id); // id 고유 값

//   const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
//   const comments = Comment.getComments();
//   console.log(comments[commentId - 1]);

//   // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
//   if (isNaN(commentId)) {
//     return res.render("404");
//   }
//   // 존재하지 않는 댓글 id 접근시 404 페이지
//   if (commentId < 1 || commentId > comments.length) {
//     return res.render("404");
//   }

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// };

exports.comment = (req, res) => {
  console.log(req.body); // {userId: 'aa', userPw:'aaa'}

  if (Id === req.body.Id && Pw === req.body.Pw) {
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
