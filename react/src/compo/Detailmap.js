import React, { useEffect, useState } from "react";
// import "./Kakaomap.css";

/* global kakao */
const Detailmap = (props) => {
  const { kakao } = window;
  let map;
  let addr = [props.addr];

  useEffect(() => {
    const mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(35.14962266596815, 126.92057654445857), //지도의 중심좌표.
      level: 1, //지도의 레벨(확대, 축소 정도)
    };

    map = new kakao.maps.Map(mapContainer, mapOption);

    map.setDraggable(true);
    map.setZoomable(true);
  }, []);

  let geocoder = new kakao.maps.services.Geocoder();

  const geo = (i) => {
    geocoder.addressSearch(addr, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  };

  for (let i = 0; i < addr.length; i++) {
    geo(i);
  }

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: "100%",
          height: "70%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          // left: "5%",
        }}
      ></div>
    </div>
  );
};

export default Detailmap;
