import React, { useEffect, useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { RiMapPinLine } from "react-icons/ri";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./myProfile.css";
import axios from "axios";
import { AiOutlineCalendar } from "react-icons/ai";

const Mypro = () => {
  const [hName, setHname] = useState([]);
  const [hCa, setHca] = useState([]);
  const [rDate, setRdate] = useState([]);
  const [rTime, setRtime] = useState([]);
  const [data, setData] = useState(0);
  let rInfo = [];
  const [rInfo1, setRinfo1] = useState([]);
  const [rInfo2, setRinfo2] = useState([]);
  const [rInfo3, setRinfo3] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);

  for (let i = 0; i < hName.length; i++) {
    rInfo.push({
      hName: hName[i],
      hCa: hCa[i],
      rDate: rDate[i],
      rTime: rTime[i],
    });
    console.log(rInfo);
  }

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/reservation", { id: user.id })
      .then((res) => {
        if (res.data.result == "success") {
          setHname(res.data.hName);
          setHca(res.data.hCa);
          setRdate(res.data.rDate);
          setRtime(res.data.rTime);
          setData(1);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }, []);

  const rev = () => {
    setRinfo1(
      rInfo.map((data, index) => {
        if ((index + 1) % 3 == 1) {
          return (
            <>
              <Card key={data.hName} className="revCard">
                <div>
                  <h2 className="revName">
                    {data.hName}
                    <br />
                    <span className="revCategory">
                      <TbMinusVertical size="25" className="revImo" />
                      {data.hCa}
                    </span>
                  </h2>
                  <div className="revContent">
                    <AiOutlineCalendar size="5%" /> {data.rDate}
                    <TbMinusVertical size="15" />
                    {data.rTime}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
    setRinfo2(
      rInfo.map((data, index) => {
        if ((index + 1) % 3 == 2) {
          return (
            <>
              <Card key={data.hName} className="revCard">
                <div>
                  <h2 className="revName">
                    {data.hName}
                    <br />
                    <span className="revCategory">
                      <TbMinusVertical size="25" className="revImo" />
                      {data.hCa}
                    </span>
                  </h2>
                  <div className="revContent">
                    <AiOutlineCalendar size="5%" /> {data.rDate}
                    <TbMinusVertical size="15" />
                    {data.rTime}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
    setRinfo3(
      rInfo.map((data, index) => {
        if ((index + 1) % 3 == 0) {
          return (
            <>
              <Card key={data.hName} className="revCard">
                <div>
                  <h2 className="revName">
                    {data.hName}
                    <br />
                    <span className="revCategory">
                      <TbMinusVertical size="25" className="revImo" />
                      {data.hCa}
                    </span>
                  </h2>
                  <div className="revContent">
                    <AiOutlineCalendar size="5%" /> {data.rDate}
                    <TbMinusVertical size="15" />
                    {data.rTime}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
  };

  useEffect(() => {
    rev();
  }, [data]);

  return (
    <Col id="profile">
      <Card className="bg-secondary shadow">
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3">
            <div className="profileImg">
              <img
                className="rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JdoMKl_cBoE-qqWZjn7OH-dvmZK73uVZ9w&usqp=CAU"
              />
            </div>
          </Col>
        </Row>
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="mb-0" name="tag1">
                My account
              </h2>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form>
            <h4 className="profileTitle">Information</h4>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Username
                  </label>
                  <div className="userContent">{user.nick}</div>
                  <br />
                </Col>
                <Col lg="6">
                  <label className="form-control-label" htmlFor="input-email">
                    Phone
                  </label>
                  <div className="userContent" id="input-email">
                    {user.phone}
                  </div>
                  <br />
                </Col>
                <Col lg="6">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Address
                  </label>
                  <div className="userContent">{user.addr}</div>
                </Col>
                <Col lg="6">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Joindate
                  </label>
                  <div className="userContent">{user.join}</div>
                </Col>
              </Row>
            </div>
            <br />
            <hr className="my-4" />
            <h4 className="profileTitle">Reservation</h4>
            {/* <button onClick={ck}>예약확인</button> */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "33%",
                }}
              >
                {rInfo1}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "33%",
                }}
              >
                {rInfo2}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "33%",
                }}
              >
                {rInfo3}
              </div>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Mypro;

{
  /* <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-address"
                                        >
                                            Address
                                        </label>
                                        <Input
                                        className="form-control-alternative"
                                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                        id="input-address"
                                        placeholder="Home Address"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-city"
                                        >
                                            City
                                        </label>
                                        <Input
                                        className="form-control-alternative"
                                        defaultValue="New York"
                                        id="input-city"
                                        placeholder="City"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                        >
                                            Country
                                        </label>
                                        <Input
                                        className="form-control-alternative"
                                        defaultValue="United States"
                                        id="input-country"
                                        placeholder="Country"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                        >
                                            Postal code
                                        </label>
                                        <Input
                                        className="form-control-alternative"
                                        id="input-postal-code"
                                        placeholder="Postal code"
                                        type="number"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row> */
}
