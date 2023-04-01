const express = require("express");
const app = express();
const PORT = 8000;

// multer 미들웨어 사용하기
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
// const upload = multer({
//   dest: "uploads/", // dest: 업로드할 파일 경로 지정
// });

const uploadDetail = multer({
  storage: multer.diskStorage({
    //diskStorage : 파일을 디스크에 저장하기 위한 모든 기능을 제공
    destination(req, file, done) {
      //destination: 경로 설정
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //file.originalname에서 확장자 추출 => png
      // path.basename(file.originalname, ext)); => apple (확장자 제거한 파일이름만 !!)
      // data.now() => 현재 시간 (1680309773184)
      // => 1970년 1월 1일 0시 0분 0초를 기준으로 현재까지 경과된 밀리초
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB   limits : 파일 제한 / fileSize : 파일 사이즈 제한
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// single(): 하나의 파일 업로드할 때
// single()의 매개변수: input 의 name과 일치시키기!
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보

  // {
  //   fieldname: 'userfile',                              // 폼에 정의한 name
  //   originalname: 'fruit2.jpg',                         // 사용자가 업로드한 파일명
  //   encoding: '7bit',                                   // 파일 인코딩 파일
  //   mimetype: 'image/jpeg',                             // 파일 mime 타입
  //   destination: 'uploads/',                            // 파일 저장할 경로(폴더)
  //   filename: 'e44d32f5445f82d2c308eda934b20eb5',       // destination 에 저장된 파일명
  //   path: 'uploads\\e44d32f5445f82d2c308eda934b20eb5',  // 업로드된 파일의 전체 경로
  //   size: 11101                                         // 파일 크기(byte)
  // }
  //[object: null prototype] { title: ''}

  console.log(req.body); // 폼에 입력한 정보
  res.send("upload 완료~!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
