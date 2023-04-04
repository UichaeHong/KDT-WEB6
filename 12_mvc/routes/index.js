const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();
// controller = {
//   main: () => {}, // 함수
//   comments: ()=> {} // 함수
// };

// const app = express();
// app.get

router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/", controller.main);

// router.get("/comments", controller.comments);
// router.get("/comment/:id", controller.comment);

// router.get("/comments", (req, res) => {
//   console.log(comments); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
//   res.render("comments", { commentInfos: comments });
// });

// 작성하지 않으면 모듈을 찾을 수 없다고 뜬다
module.exports = router;
