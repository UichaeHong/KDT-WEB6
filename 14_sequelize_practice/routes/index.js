const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

// GET /visitor/get
router.get("/visitor/get", controller.getVisitor); // 하나 조회

// PATCH /visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // 하나 수정

// DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); // 하나 삭제

// 13_mvc_mysql_practice signup / signin
router.get("/signup", controller.signup);
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);
router.post("/profile/edit", controller.edit_profile);
router.post("/profile/delete", controller.delete_profile);

module.exports = router;
