// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser"); // controller와 연결
const router = express.Router(); // 라우터 변수 정의

// GET / => localhost:PORT/
// 기본 주소: localhost:PORT/user
router.get("/", controller.index);

router.get("/signup", controller.signup); // 회원가입

router.get("/signin", controller.signin); // 로그인

router.post("/signup", controller.post_signup);

router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);
// router.post("/signin/practice", controller.postsignin); // 로그인

router.post("/profile/delete", controller.delete_profile);

router.post("/profile/edit", controller.edit_profile);

module.exports = router;
