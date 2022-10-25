const express = require("express");
const router = express.Router();
const mysql = require("mysql"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능
const axios = require("axios");
const path = require("path");

let conn = mysql.createConnection({
  // 나의 DB 정보
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: "3306",
  database: "nodejs_DB",
});

// View (React) => router로 데이터 보내기
router.post("/joinData", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let sql = "select * from member where id = ? and pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    console.log("연결성공");
    if (rows.length > 0) {
      console.log("아이디 찾기 완료");
      let ids = rows[0].id;
      let pws = rows[0].pw;
      let nicks = rows[0].nick;
      res.json({ result: "success", id: ids, pw: pws, nick: nicks });
    } else {
      console.log(rows);
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
