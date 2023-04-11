const express = require("express");
const session = require("express-session");
// const dotenv = require("dotenv");
const app = express();
const PORT = 8000;

// dotenv.config();
// console.log("dotenv >>", process.env.SECRET_KEY);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: "aaa",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

const realId = "banana";
const realPw = "4321";

app.post("/practice2", (req, res) => {
  console.log(req.body);

  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    res.send({ isLogin: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
