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
router.get("/board", function (req, res) {
  let board = [];

  let sql = "select * from t_board";
  conn.query(sql, function (err, rows) {
    if (!err) {
      for (let i = 0; i < rows.length; i++) {
        let seq = rows[i].board_seq;
        let date = rows[i].board_date;
        let title = rows[i].board_title;
        let content = rows[i].board_content;
        board.push({
          seqs: seq,
          dates: date,
          titles: title,
          contents: content,
        });
      }
      res.json({
        result: "success",
        t_board: board,
      });
    } else {
      res.json({ result: "false" });
    }
  });
});
router.post("/hosLogin", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let sql = "select * from t_hospital where hosp_id = ? and hosp_pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    console.log("연결성공");
    if (rows.length > 0) {
      console.log("아이디 찾기 완료");
      let ids = rows[0].hosp_id;
      let pws = rows[0].hosp_pw;
      let nicks = rows[0].hosp_name;
      res.json({ result: "success", id: ids, pw: pws, nick: nicks });
    } else {
      console.log(err);
      res.json({ result: "False" });
    }
  });
});

// 리뷰 작성 라우터
router.post("/getrv", function (req, res) {
  let num = req.body.num;
  let id = req.body.id;
  let area = req.body.area;
  let sql = "select * from  t_reservation where hosp_num = ? and user_id = ?";
  let sql2 = "insert into t_review(user_id,hosp_num,rv_content) values(?,?,?) ";
  conn.query(sql, [num, id], function (err, rows) {
    if (!err) {
      console.log(rows.length);
      if (rows.length !== 0) {
        conn.query(sql2, [id, num, area], function (err2, rows2) {
          if (!err2) {
            res.json({ result: "success" });
          } else {
            res.json({ result: "false" });
          }
        });
      } else {
        res.json({ result: "dont" });
      }
    } else {
      res.json({ result: "false" });
    }
  });
});

router.post("/Login", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let sql =
    "select user_id, user_name, user_rn, user_phone, date_format(user_joindate, '%Y년 %m월 %d일') user_joindate, user_type, user_addr from t_user where user_id = ? and user_pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    console.log("연결성공");
    if (rows.length > 0) {
      console.log("아이디 찾기 완료");
      let ids = rows[0].user_id;
      let pws = rows[0].user_pw;
      let nicks = rows[0].user_name;
      let phone = rows[0].user_phone;
      let rn = rows[0].user_rn;
      let join = rows[0].user_joindate;
      let type = rows[0].user_type;
      let addr = rows[0].user_addr;
      res.json({
        result: "success",
        id: ids,
        pw: pws,
        nick: nicks,
        type: type,
        rn: rn,
        phone: phone,
        join: join,
        addr: addr,
      });
    } else {
      console.log(err);
      res.json({ result: "False" });
    }
  });
});
router.post("/delete", function (req, res) {
  console.log(req.body.seq);
  let seq = req.body.seq;
  let sql = `delete from t_board where board_seq =${seq}`;
  conn.query(sql, function (err, rows) {
    if (!err) {
      res.json({
        result: "success",
      });
    } else {
      console.log(err);
      res.json({ result: "false" });
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
router.post("/SendBoard", function (req, res) {
  let title = req.body.titles;
  let contesnt = req.body.contents;
  let sql = "insert into t_board(board_title,board_content) values(?,?)";
  conn.query(sql, [title, contesnt], function (err, rows) {
    if (!err) {
      res.json({ result: "success" });
    } else {
      res.json({ result: "false" });
    }
  });
});
router.get("/map", function (req, res) {
  let hos_name = [];
  let hos_addr = [];
  let hos_ca = [];
  let hos_tel = [];
  let sql = "select * from t_hospital";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hosp_name);
        hos_addr.push(rows[i].hosp_addr);
        hos_ca.push(rows[i].hosp_category);
        hos_tel.push(rows[i].hosp_tel);
      }
      res.json({
        result: "success",
        name: hos_name,
        addr: hos_addr,
        ca: hos_ca,
        tel: hos_tel,
      });
    } else {
      console.log("데이터 오류");
      res.json({ result: "false" });
    }
  });
});

// 병원 프라이머리 키 가져오는 라우터
router.post("/getnum", function (req, res) {
  let names = req.body.names;
  let addr = req.body.addr;
  let sql =
    "select hosp_num from t_hospital where hosp_name = ? and hosp_addr = ?";
  conn.query(sql, [names, addr], function (err, rows) {
    if (!err) {
      let sql2 = "select * from t_review where hosp_num = ?";
      conn.query(sql2, [rows[0].hosp_num], function (err2, rows2) {
        if (!err2) {
          res.json({
            result: "success",
            num: rows[0].hosp_num,
            rv_list: rows2,
          });
        } else {
          res.json({ result: "false" });
        }
      });
    } else {
      res.json({ result: "false" });
    }
  });
});

// 예약 하는 라우터
router.post("/send_r", function (req, res) {
  console.log(req.body);
  let nums = req.body.hosp_num;
  let id = req.body.id;
  let date = req.body.date;
  let sql1 =
    "select * from t_reservation where hosp_num = ? and reserv_time =?";
  let sql2 =
    "insert into t_reservation(user_id,hosp_num,reserv_time) values(?,?,?)";

  conn.query(sql1, [nums, date], function (err1, rows1) {
    if (!err1) {
      if (rows1.length === 0) {
        conn.query(sql2, [id, nums, date], function (err2, rows2) {
          if (!err2) {
            res.json({ result: "success" });
          } else {
            console.log(err2);
            res.json({ result: "false" });
          }
        });
      } else {
        res.json({ result: "dont" });
      }
    } else {
      console.log(err1);
    }
  });
});

router.post("/reservation", function (req, res) {
  // let user = JSON.parse(localStorage.getItem("user"));
  // req.body.id
  let id = req.body.id;
  console.log(id);
  let hos_name = [];
  let hos_ca = [];
  let reserv_date = [];
  let reserv_time = [];
  let sql = `select h.hosp_name,h.hosp_category, date_format(r.reserv_time, '%Y년 %m월 %d일') date, date_format(r.reserv_time, '%H시 %i분') time
  from t_hospital h, t_reservation r
  where h.hosp_num=r.hosp_num
  and r.user_id=?
  order by reserv_time desc`;
  conn.query(sql, [id], function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hosp_name);
        hos_ca.push(rows[i].hosp_category);
        reserv_date.push(rows[i].date);
        reserv_time.push(rows[i].time);
      }
      res.json({
        result: "success",
        hName: hos_name,
        hCa: hos_ca,
        rDate: reserv_date,
        rTime: reserv_time,
      });
    } else {
      console.log(err);
      console.log("데이터 오류");
      res.json({ result: "false" });
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
