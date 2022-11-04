import { useState, useEffect } from "react";
import styled from "styled-components";
import "./Posts.css";
import { FaSearch, FaRegMap } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

function Posts(props) {
  let ma = props.ma;
  const [ko1, setKo1] = useState([]);
  const [ko2, setKo2] = useState([]);
  const [ko3, setKo3] = useState([]);

  const li = () => {
    setKo1(
      ma.map((data, index) => {
        if ((index + 1) % 3 == 1) {
          return (
            <>
              <Card key={data.name} className="postCard">
                <div>
                  <h2 className="cardName">
                    {data.name}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.ca}
                    </span>
                  </h2>
                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.addr}
                    <br />
                    <RiPhoneLine size="5%" /> {data.tel}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
    setKo2(
      ma.map((data, index) => {
        if ((index + 1) % 3 == 2) {
          return (
            <>
              <Card key={data.name} className="postCard">
                <div>
                  <h2 className="cardName">
                    {data.name}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.ca}
                    </span>
                  </h2>
                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.addr}
                    <br />
                    <RiPhoneLine size="5%" /> {data.tel}
                  </div>
                </div>
              </Card>
              <br />
            </>
          );
        }
      })
    );
    setKo3(
      ma.map((data, index) => {
        if ((index + 1) % 3 == 0) {
          return (
            <>
              <Card key={data.name} className="postCard">
                <div>
                  <h2 className="cardName">
                    {data.name}
                    <br />
                    <span className="cardCategory">
                      <TbMinusVertical size="25" className="lineImo" />
                      {data.ca}
                    </span>
                  </h2>
                  <div className="cardContent">
                    <RiMapPinLine size="5%" /> {data.addr}
                    <br />
                    <RiPhoneLine size="5%" /> {data.tel}
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

  const chCa = (e) => {
    ma = [];
    console.log(ma);
    console.log(e.target.value);
    for (let i = 0; i < props.ma.length; i++) {
      if (e.target.value == props.ma[i].ca) {
        ma.push(props.ma[i]);
      } else if (e.target.value == "전체") {
        ma.push(props.ma[i]);
      }
    }
    console.log(ma);

    li();
  };

  const chSe = () => {
    let se = document.getElementById("searchHos");
    let ca = document.getElementById("optionCategory");
    console.log(se.value);
    console.log(ca.value);
    ma = [];
    console.log(ma);
    for (let i = 0; i < props.ma.length; i++) {
      if (se.value == props.ma[i].name && ca.value == props.ma[i].ca) {
        ma.push(props.ma[i]);
      } else if (ca.value == "전체" && se.value == props.ma[i].name) {
        ma.push(props.ma[i]);
      } else if (ca.value == "전체" && se.value == "") {
        ma.push(props.ma[i]);
      } else if (se.value == "" && ca.value == props.ma[i].ca) {
        ma.push(props.ma[i]);
      }
    }
    li();
    console.log(ma);
    se.value = "";
    ca.value = "전체";
  };

  useEffect(function () {
    li();
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "0",
          height: "0",
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
      <div id="wrap">
        <h1 align="center" id="titleHos">
          병원 목록
        </h1>
        <div id="searchAll">
          <select id="optionHos" name="ca" onChange={chCa}>
            <option value="전체">카테고리</option>
            <option value="내과">내과</option>
            <option value="비뇨기과">비뇨기과</option>
            <option value="안과">안과</option>
            <option value="외과">외과</option>
            <option value="이비인후과">이비인후과</option>
            <option value="정형외과">정형외과</option>
            <option value="치과">치과</option>
            <option value="한의원">한의원</option>
          </select>
          <input id="searchHos" placeholder="병원 검색" />
          <button id="inputHos" onClick={chSe}>
            <FaSearch size="25" />
          </button>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {ko1}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {ko2}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            {ko3}
          </div>
        </div>
        <button
          id="changeMap"
          onClick={() => {
            props.setCnt(0);
          }}
        >
          <FaRegMap size="30" />
        </button>
      </div>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;
