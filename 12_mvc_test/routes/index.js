const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router(); // router 메서드 사용

router.get("/", controller.main); // controller에 main이라는 함수를 실행시키기
router.post("/practice2", controller.practice2);
// router.get("/comments", controller.comments);
// router.get("/comment/:id", controller.comment);

module.exports = router; //내보내기를 해주었기 때문에 app.js에서 10번줄이 실행
