// before
// exports.getVisitors = () => {
//   // return [
//   //   { id: 1, name: "홍길동", comment: "내가 왔다" },
//   //   { id: 2, name: "이찬혁", comment: "으라차차" },
//   // ];
// };

// after
const mysql = require("mysql");

// database 연결하는 코드
const conn = mysql.createConnection({
  host: "localhost", //database가 설치된 ip 주소
  user: "user", // 데이터베이스 접속 계정명
  password: "4321", // 데이터베이스 접속 비번 / 강의자료 19페이지 맨 밑에 비밀번호 변경 코드
  database: "codingon", // 사용할 데이터베이스 이름
});

exports.getVisitors = (callback) => {
  // conn.query(sql, callback)
  // => conn 에 저장되어 있는 데이터베이스 접근해서 sql문 실행
  // => 결과를 callback 함수에 넘겨줌
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("visitor.js:", rows);
    callback(rows);
  });
};
