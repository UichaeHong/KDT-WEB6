// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

router.get("/signup/test", controller.getSignup); // 회원가입

// router.post("/signin/practice", controller.postsignin); // 로그인

module.exports = router;
