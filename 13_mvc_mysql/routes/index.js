const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors); // 전체 조희

//POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 요청이 들어오면 하나 추가

module.exports = router;
