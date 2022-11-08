import { Radio, radioClasses } from "@mui/material";
import { textAlign } from "@mui/system";
import "./questionnaire.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

const Questionnaire = (props) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  // 여기서 부터 체크박스
  const [info4, setInfo4] = useState("");
  const [info5, setInfo5] = useState("");
  const [info6, setInfo6] = useState("");
  const [info7, setInfo7] = useState("");
  // 그다음 체크박스
  const [info8, setInfo8] = useState("");
  const [info9, setInfo9] = useState("");
  const [info10, setInfo10] = useState("");
  const [info11, setInfo11] = useState("");
  const [info12, setInfo12] = useState("");
  const [info13, setInfo13] = useState("");
  const [info14, setInfo14] = useState("");

  const [ch1, setCh1] = useState("");
  const [ch2, setCh2] = useState("");

  const send = (e) => {
    e.preventDefault();
    console.log(props.startDate);
    console.log(props.num);
    console.log(user.id);
    setCh1(info4 + "," + info5 + "," + info6 + "," + info7);
    setCh2(
      info8 +
        "," +
        info9 +
        "," +
        info10 +
        "," +
        info11 +
        "," +
        info12 +
        "," +
        info13 +
        "," +
        info14
    );

    console.log(ch1);
    console.log(ch2);
    reservation();
  };
  const reservation = () => {
    var s_date = moment(props.startDate).format("YYYY-MM-DD HH:mm:ss");
    axios
      .post("http://127.0.0.1:3001/send_r", {
        hosp_num: props.num,
        id: user.id,
        date: s_date,
        rninfo1: info1,
        rninfo2: info2,
        rninfo3: info3,
        rninfo4: ch1,
        rninfo5: ch2,
      })
      .then((res) => {
        if (res.data.result == "success") {
          alert("예약성공");
          history.push("/admin/index");
        } else {
          alert("이미 예약된 시간입니다.");
        }
      })
      .catch(() => {
        console.log("예약 오류남");
      });
  };
  return (
    <>
      <div id="hahaha">
        <form onSubmit={send}>
          <table border="2px solid">
            <tr height="100">
              <th colSpan={2}>
                <h1 align="center">병원 문진표</h1>
              </th>
            </tr>
            <tr height="70">
              <td>원하시는 치료 범위는 무엇입니까?</td>
              <td>
                <input
                  type={"radio"}
                  name="Info1"
                  value={"전체 검진"}
                  onClick={(e) => setInfo1(e.target.value)}
                />
                전체 검진
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info1"
                  value={"아픈 곳만 치료"}
                  onClick={(e) => setInfo1(e.target.value)}
                />
                아픈 곳만 치료
              </td>
            </tr>
            <tr height="70">
              <td>저희 병원은 어떻게 알고 오셨습니까?</td>
              <td>
                <input
                  type={"radio"}
                  name="Info2"
                  value={"지인 소개"}
                  onClick={(e) => setInfo2(e.target.value)}
                />
                지인
                소개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info2"
                  value={"인터넷"}
                  onClick={(e) => setInfo2(e.target.value)}
                />
                인터넷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info2"
                  value={"매체물"}
                  onClick={(e) => setInfo2(e.target.value)}
                />
                매체물(신문, 잡지)
                <br />
                <input
                  type={"radio"}
                  name="Info2"
                  value={"집 근처"}
                  onClick={(e) => setInfo2(e.target.value)}
                />
                집
                근처&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info2"
                  value={"회사 근처"}
                  onClick={(e) => setInfo2(e.target.value)}
                />
                회사 근처
              </td>
            </tr>
            <tr height="70">
              <td>병원에 얼마 만에 오셨습니까?</td>
              <td>
                <input
                  type={"radio"}
                  name="Info3"
                  value={"처음 내원"}
                  onClick={(e) => setInfo3(e.target.value)}
                />
                처음 내원
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info3"
                  value={"1년 이내"}
                  onClick={(e) => setInfo3(e.target.value)}
                />
                1년
                이내&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"radio"}
                  name="Info3"
                  value={"1 ~ 3년 이내"}
                  onClick={(e) => setInfo3(e.target.value)}
                />
                1 ~ 3년 이내
                <br />
                <input
                  type={"radio"}
                  name="Info3"
                  value={"3년 이상"}
                  onClick={(e) => setInfo3(e.target.value)}
                />
                3년 이상
              </td>
            </tr>
            <tr height="70">
              <td>과거 치료 중 불편했던 경험을 모두 표시하여 주세요</td>
              <td>
                <input
                  type={"checkbox"}
                  name="Info4"
                  value={"심리적 불안, 공포"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo4(e.target.value);
                    } else {
                      setInfo4(e.target.value);
                    }
                  }}
                />
                심리적 불안, 공포&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info4"
                  value={"통증"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo5(e.target.value);
                    } else {
                      setInfo5(e.target.value);
                    }
                  }}
                />
                통증&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info4"
                  value={"치료시간"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo6(e.target.value);
                    } else {
                      setInfo6(e.target.value);
                    }
                  }}
                />
                치료시간
                <br />
                <input
                  type={"checkbox"}
                  name="Info4"
                  value={"불친절"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo7(e.target.value);
                    } else {
                      setInfo7(e.target.value);
                    }
                  }}
                />
                불친절
              </td>
            </tr>
            <tr height="70">
              <td>과거 또는 현재의 질환을 모두 표시하여 주세요.</td>
              <td>
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"없음"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo8(e.target.value);
                    } else {
                      setInfo8(e.target.value);
                    }
                  }}
                />
                없음&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"저, 고혈압"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo9(e.target.value);
                    } else {
                      setInfo9(e.target.value);
                    }
                  }}
                />
                저,
                고혈압&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"알레르기"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo10(e.target.value);
                    } else {
                      setInfo10(e.target.value);
                    }
                  }}
                />
                알레르기
                <br />
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"호흡기질환"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo11(e.target.value);
                    } else {
                      setInfo11(e.target.value);
                    }
                  }}
                />
                호흡기질환&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"심장질환"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo12(e.target.value);
                    } else {
                      setInfo12(e.target.value);
                    }
                  }}
                />
                심장질환&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"신장질환"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo13(e.target.value);
                    } else {
                      setInfo13(e.target.value);
                    }
                  }}
                />
                신장질환
                <br />
                <input
                  type={"checkbox"}
                  name="Info5"
                  value={"위장질환"}
                  onClick={(e) => {
                    if (info4 == "") {
                      setInfo14(e.target.value);
                    } else {
                      setInfo14(e.target.value);
                    }
                  }}
                />
                위장질환
              </td>
            </tr>
            <tr colSpan>
              <td colSpan={2} align="center">
                <button type="submit">제출</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Questionnaire;
