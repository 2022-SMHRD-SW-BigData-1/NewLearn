import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Example from "./picker";

import "./kkkk.css";
import logo from "../image/logo.jpg";
import Review_btn from "./Review_btn";
import dj1 from "../image/dj1.jpg";
import { useEffect, useState } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import axios from "axios";

const Detail = () => {
  const [params, setParams] = useUrlSearchParams({ checked: true });
  const [num, setNum] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/getnum", {
        names: params.title,
        addr: params.addr,
      })
      .then((res) => {
        if (res.data.result == "success") {
          setNum(res.data.num);
        } else {
          console.log("오류 발생");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
    console.log(params);
  }, [params.checked]);

  return (
    <>
      <Header />

      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="card_a">
              <div className="detail">
                <div className="inner_place">
                  <img className="logo" src={logo} />

                  <div className="main_name">
                    <p className="small_tit">{params.title}</p>
                    <p className="tit">{params.title}</p>

                    <ul className="menu">
                      <li className="bnt">
                        <a href="#tit_info_id" style={{ color: "#545A71" }}>
                          <span className="ni ni-badge"></span>
                          <br></br>
                          상세정보
                        </a>
                      </li>

                      <li className="bnt">
                        <a href="#reser_id" style={{ color: "#545A71" }}>
                          <span className="ni ni-calendar-grid-58"></span>
                          <br></br>
                          예약하기
                        </a>
                      </li>

                      <li className="bnt">
                        <a href="#review_id" style={{ color: "#545A71" }}>
                          <span className="ni ni-align-center"></span>
                          <br></br>
                          리뷰확인
                        </a>
                      </li>

                      <li className="bnt">
                        <a href="#" style={{ color: "#545A71" }}>
                          <span className="ni ni-square-pin"></span>
                          <br></br>
                          길찾기
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="separate1" md="6">
            <Card className="card_b">
              <div className="info">
                <br></br>
                <br></br>
                <h1 id="tit_info_id" className="tit_info">
                  상세정보
                </h1>
                <div>
                  <h4 className="ni ni-pin-3">
                    <span className="info_txt"> {params.addr}</span>
                  </h4>
                </div>

                <div>
                  <h4 className="ni ni-time-alarm">
                    <span className="info_txt"> 화~일 10:00 ~ 20:00</span>
                  </h4>
                </div>

                <div>
                  <h4 className="ni ni-world-2">
                    <a href="http://djos.co.kr/" className="info_txt">
                      {" "}
                      http://djos.co.kr/
                    </a>
                  </h4>
                </div>

                <div>
                  <h4 className="ni ni-mobile-button">
                    <span className="info_txt">{params.tel}</span>
                  </h4>
                </div>
              </div>
            </Card>
          </Col>

          <Col className="separate2" md="6">
            <Card className="card_c">
              <div className="photo">
                <br></br>
                <br></br>
                <h1>대표사진</h1>
                <img className="hos_pic" src={dj1} />
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="separate1" md="6">
            <Card className="card_b">
              <div id="reser_id" className="reser">
                <br></br>
                <br></br>
                <h1>예약하기</h1>
                <Example hosp_num={num} user_id={user.id}></Example>
              </div>
            </Card>
          </Col>

          <Col className="separate2" md="6">
            <Card className="card_c">
              <div className="photo">
                <br></br>
                <br></br>
                <h1>내부사진</h1>
                <img className="hos_pic" src={dj1} />
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card_d">
              <div id="review_id" className="review">
                <h1>리뷰</h1>
                <textarea
                  className="review_input"
                  placeholder="리뷰를 작성해주세요.(300자)"
                  maxLength={"300"}
                ></textarea>
                <Review_btn />
              </div>
              <div className="review_txt">
                <h1>전체</h1>
                <div className="review_list">
                  <ul>
                    <li>
                      <div className="rv_user">
                        <span className="user_name">작성자명 | </span>
                        <span className="date_write">작성날짜 : </span>
                        <span className="date_write">2022.11.01</span>
                      </div>
                      <div className="comment">
                        <p className="txt_comment">
                          <span>너무 좋습니다.</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card_e">
              <div className="map_info">
                <h1>찾아가는 길</h1>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Detail;
