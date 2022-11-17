import React, { useEffect, useState } from "react";
import "./Kakaomap.css";
import Posts from "./Posts";
import axios from "axios";
import { FaListUl, FaSearch } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { te } from "date-fns/locale";

import { Link } from "react-router-dom";
/* global kakao */
const Map = () => {
  const [cnt, setCnt] = useState(0);
  const { kakao } = window;
  let map;
  const [name, setName] = useState([]);
  const [addr, setAddr] = useState([]);
  const [ca, setCa] = useState([]);
  const [tel, setTel] = useState([]);

  useEffect(() => {
    const mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(35.14962266596815, 126.92057654445857), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    };

    map = new kakao.maps.Map(mapContainer, mapOption);
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/map", {})
      .then((res) => {
        if (res.data.result == "success") {
          setName(res.data.name);
          setAddr(res.data.addr);
          setCa(res.data.ca);
          setTel(res.data.tel);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }, []);

  let content = [];
  let ma = [];
  let markers = [];

  for (let i = 0; i < name.length; i++) {
    content.push(
      `<table style="width:250px;height:100px">
                <tr style="background-color:lightgray">
                    <th colspan='2' style="text-align:center">${name[i]}</th>
                </tr>
                <tr>
                    <td style="text-align:left">&nbsp;&nbsp;&nbsp;주소&nbsp;&nbsp;:&nbsp;&nbsp;${addr[i]}</td>
                </tr>
                <tr>
                    <td style="text-align:left">연락처&nbsp;&nbsp;:&nbsp;&nbsp;${tel[i]}</td>
                </tr>
                <tr>
                    <td colspan='2' align="center">  <button type='button' style='border:0' 'color:black'>
                    <a href="http://localhost:3000/admin/Detail?title=${name[i]}&addr=${addr[i]}&ca=${ca[i]}&tel=${tel[i]}"/>이동하기
                    </button></td>
                </tr>
            </table>`
    );
    ma.push({
      name: name[i],
      addr: addr[i],
      ca: ca[i],
      content: content[i],
      tel: tel[i],
    });
  }

  let geocoder = new kakao.maps.services.Geocoder();

  const geo = (i) => {
    geocoder.addressSearch(`${ma[i].addr}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        markers.push(marker);

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: ma[i].content,
          removable: true,
        });

        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseup",
          makeOutListener(infowindow)
        );
      }
    });
  };

  for (let i = 0; i < name.length; i++) {
    geo(i);
  }

  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };

  const makeOverListener = (map, marker, infowindow) => {
    return function () {
      infowindow.open(map, marker);
    };
  };

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  const makeOutListener = (infowindow) => {
    return function () {
      infowindow.close();
    };
  };

  const myFunction = (e) => {
    removeMarker();
    for (let i = 0; i < ma.length; i++) {
      if (e.target.value == ma[i].ca) {
        geo(i);
      } else if (e.target.value == "전체") {
        // console.log(ma[i]);
        geo(i);
      }
    }
  };

  const sear = () => {
    removeMarker();
    let se = document.getElementById("search");
    let ca = document.getElementById("category");
    for (let i = 0; i < ma.length; i++) {
      if (se.value == ma[i].name && ca.value == ma[i].ca) {
        geo(i);
      } else if (se.value == "" && ca.value == "전체") {
        geo(i);
      } else if (se.value == "" && ca.value == ma[i].ca) {
        geo(i);
      } else if (se.value == ma[i].name && ca.value == "전체") {
        geo(i);
      }
    }
    se.value = "";
    ca.value = "전체";
  };

  if (cnt == 0) {
    return (
      <div className="map_wrap">
        <div
          id="map"
          style={{
            width: "100%",
            height: "600px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        ></div>
        <div id="asd">
          <select id="category" name="ca" onChange={myFunction}>
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
          <input id="search" placeholder="병원 검색" />
          <button id="submit" onClick={sear}>
            <FaSearch size="25" />
          </button>
        </div>

        <button
          id="list"
          onClick={() => {
            setCnt(1);
          }}
        >
          <FaListUl size="30" />
        </button>
      </div>
    );
  } else if (cnt == 1) {
    console.log(cnt);
    return <Posts setCnt={setCnt} ma={ma} />;
  }
};

export default Map;
