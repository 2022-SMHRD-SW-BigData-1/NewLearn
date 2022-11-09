import { useState, useEffect } from "react";
// import Example from "./picker";
import axios from "axios";
import { TbMinusVertical } from "react-icons/tb";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import Modal from "react-modal";
import User_hosp from "../views/examples/User_hosp.js";

function Hosposts() {
  const [revD1, setRevd1] = useState([]);
  const [revD2, setRevd2] = useState([]);
  const [revD3, setRevd3] = useState([]);
  let hrInfo = [];
  const [uName, setUname] = useState([]);
  const [uPhone, setUphone] = useState([]);
  const [rDate, setRdate] = useState([]);
  const [data, setData] = useState(0);
  const [modals2, setModal2] = useState(false);
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);
  const [info3, setInfo3] = useState([]);
  const [info4, setInfo4] = useState([]);
  const [info5, setInfo5] = useState([]);
  const [gopro, setPro] = useState([1, 2, 3]);

  for (let i = 0; i < uName.length; i++) {
    // rRtime1.push(new Date(rRtime[i]).getTime())
    // rRtime2.push(moment(rRtime[i]).format("YYYY-MM-DD HH:mm:ss"))
    hrInfo.push({
      uName: uName[i],
      uPhone: uPhone[i],
      rDate: rDate[i],
      info1: info1[i],
      info2: info2[i],
      info3: info3[i],
      info4: info4[i],
      info5: info5[i],
    });
  }
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/hosposts", { hname: user.nick })
      .then((res) => {
        if (res.data.result == "success") {
          setUname(res.data.uName);
          setUphone(res.data.uPhone);
          setRdate(res.data.rDate);
          setInfo1(res.data.rinfo1);
          setInfo2(res.data.rinfo2);
          setInfo3(res.data.rinfo3);
          setInfo4(res.data.rinfo4);
          setInfo5(res.data.rinfo5);
          setData(1);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }, []);

  const li = () => {
    setRevd1(
      hrInfo.map((data, index) => {
        if ((index + 1) % 3 == 1) {
          return (
            <>
              <Card
                key={data.uName}
                className="postCard"
                onClick={() => {
                  setPro(data);
                  setModal2(true);
                }}
              >
                <div>
                  <h2 className="cardName">
                    {data.uName}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.uPhone}
                    </span>
                  </h2>
                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.rDate}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
    setRevd2(
      hrInfo.map((data, index) => {
        if ((index + 1) % 3 == 2) {
          return (
            <>
              <Card
                key={data.uName}
                className="postCard"
                onClick={() => {
                  setPro(data);
                  setModal2(true);
                }}
              >
                <div>
                  <h2 className="cardName">
                    {data.uName}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.uPhone}
                    </span>
                  </h2>

                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.rDate}
                  </div>
                </div>
              </Card>

              <br />
            </>
          );
        }
      })
    );
    setRevd3(
      hrInfo.map((data, index) => {
        if ((index + 1) % 3 == 0) {
          return (
            <>
              <Card
                key={data.uName}
                className="postCard"
                onClick={() => {
                  setPro(data);
                  setModal2(true);
                }}
              >
                <div>
                  <h2 className="cardName">
                    {data.uName}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.uPhone}
                    </span>
                  </h2>
                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.rDate}
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

  useEffect(
    function () {
      li();
    },
    [data]
  );

  return (
    <>
      <div id="wrap">
        <h1 align="center" id="titleHos">
          예약자 목록
        </h1>
        <div id="searchAll">{/* <Example/> */}</div>
        <br />
        <div style={{ display: "flex" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {revD1}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {revD2}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {revD3}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modals2}
        onRequestClose={() => setModal2(false)}
        className="question"
      >
        <User_hosp gopro={gopro} setModal2={setModal2}></User_hosp>
      </Modal>
    </>
  );
}

// const Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
//   margin: 0 auto;
// `;

export default Hosposts;
