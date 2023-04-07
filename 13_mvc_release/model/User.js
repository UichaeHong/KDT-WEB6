// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", // databse 가 설치된 ip 주소
  user: "user", // 데이터베이스 접속 계정명
  password: "4321", // 데이터베이스 접속 비번
  database: "codingon", // 사용할 데이터베이스 이름
});

// database 연결

exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js >> ", rows);
    // => [ {}, {}, {} ]
    callback(rows);
  });
};
