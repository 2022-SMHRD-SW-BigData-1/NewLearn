const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능
const axios = require("axios");
const path = require("path");

// 원격 DB 코드
let conn = mysql.createConnection({
  // 나의 DB 정보
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_3",
  password: "smhrd3",
  port: "3307",
  database: "campus_h_1024_3",
});
// let conn = mysql.createConnection({
//   // 나의 DB 정보
//   host: "127.0.0.1",
//   user: "root",
//   password: "123456",
//   port: "3306",
//   database: "nodejs_DB",
// });

// View (React) => router로 데이터 보내기
router.post("/Login", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let sql = "select * from t_user where user_id = ? and user_pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    console.log("연결성공");
    if (!err) {
      console.log("아이디 찾기 완료");
      let ids = rows[0].user_id;
      let pws = rows[0].user_pw;
      let nicks = rows[0].user_name;
      res.json({ result: "success", id: ids, pw: pws, nick: nicks });
    } else {
      console.log(err);
      res.json({ result: "False" });
    }
  });
});
router.post("/joinData", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let name = req.body.name;
  let phone = req.body.phone;
  let nums = req.body.num;
  let sql =
    "insert into t_user(user_id,user_pw,user_name,user_rn,user_phone) values(?,?,?,?,?)";
  conn.query(sql, [id, pw, name, nums, phone], function (err, rows) {
    console.log("연결성공");
    if (!err) {
      console.log("회원가입 완료");
      res.json({ result: "success" });
    } else {
      console.log(err);
      res.json({ result: "False" });
    }
  });
});

router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(
    path.join(__dirname, "..", "react-project", "build", "index.html")
  );
});

module.exports = router;
