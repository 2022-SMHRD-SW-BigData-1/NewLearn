import React, { useEffect, useState } from "react";

/* global kako */
const Map = ()=>{
    const {kakao} = window;
    let ma;
    let removeMarker;
    let geocoder;
    let map;
    let content;
    let marker;
    let markers;
    let makeOverListener;
    let makeOutListener;

    useEffect(()=>{
        const mapContainer = document.getElementById('map')
        
        let mapOption = {
            center: new kakao.maps.LatLng(35.14962266596815, 126.92057654445857), //지도의 중심좌표.
            level: 1//지도의 레벨(확대, 축소 정도)
        }

        map = new kakao.maps.Map(mapContainer, mapOption);
        geocoder = new kakao.maps.services.Geocoder();

        let name = ["진내과의원","노벨플러스내과의원","대인연합내과의원","반이비인후과의원","허웅이비인후과의원"]
        let addr = ["광주광역시 동구 금남로 250-8","광주광역시 동구 제봉로222번길 13","광주광역시 동구 제봉로 182","광주광역시 동구 충장로안길 42","광주광역시 동구 중앙로 233"]
        let ca = ["내과","내과","내과","이비인후과","이비인후과"]
        content = [];
        ma = [];
        markers = [];

        for (let i = 0; i < name.length; i++) {
            content.push(
                `<table border="1px" style="width:300px;height:100px">
                    <tr>
                        <th colspan='2' style="text-align:center">${name[i]}</th>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>${addr[i]}</td>
                    </tr>
                    <tr>
                        <td colspan='2' align="center"><a href="http://localhost:3000/admin/index"><button> 예약하기</button></a></td>
                    </tr>
                </table>`
            )
            ma.push({name:name[i],addr:addr[i],ca:ca[i],content:content[i]});
        }

        for (let i = 0; i < ma.length; i++) {
            geocoder.addressSearch(`${ma[i].addr}`, function(result, status) {
                // 정상적으로 검색이 완료됐으면 
                 if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    markers.push(marker);
            
                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: ma[i].content,
                        removable: true
                    });

                    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
                    kakao.maps.event.addListener(marker, 'mouseup', makeOutListener(infowindow));
                } 
            });
        }
        
        removeMarker=()=>{
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            };
            markers = [];
        };

        makeOverListener=(map, marker, infowindow)=> {
            return function() {
                infowindow.open(map, marker);
            };
        };

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        makeOutListener=(infowindow)=> {
            return function() {
                infowindow.close();
            };
        };
    },[])

    const myFunction = (e)=>{
            removeMarker();
            for (let i = 0; i < ma.length; i++) {
                if (e.target.value==ma[i].ca) {
                    geocoder.addressSearch(`${ma[i].addr}`, function(result, status) {
                        // 정상적으로 검색이 완료됐으면 
                        if (status === kakao.maps.services.Status.OK) {
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                            // 결과값으로 받은 위치를 마커로 표시합니다
                            var marker = new kakao.maps.Marker({
                                map: map,
                                position: coords
                            });

                            markers.push(marker);

                            // 인포윈도우로 장소에 대한 설명을 표시합니다
                            var infowindow = new kakao.maps.InfoWindow({
                                content: content[i],
                                removable: true
                            });

                            kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
                            kakao.maps.event.addListener(marker, 'mouseup', makeOutListener(infowindow))
                        }
                    });
                } else if(e.target.value=='전체'){
                    // console.log(ma[i]);
                    geocoder.addressSearch(`${ma[i].addr}`, function(result, status) {
                        // 정상적으로 검색이 완료됐으면 
                        if (status === kakao.maps.services.Status.OK) {
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                            // 결과값으로 받은 위치를 마커로 표시합니다
                            var marker = new kakao.maps.Marker({
                                map: map,
                                position: coords
                            });

                            markers.push(marker);

                            // 인포윈도우로 장소에 대한 설명을 표시합니다
                            var infowindow = new kakao.maps.InfoWindow({
                                content: content[i],
                                removable: true
                            });

                            kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
                            kakao.maps.event.addListener(marker, 'mouseup', makeOutListener(infowindow));
                        };
                    });
                };
            };
        };

    return (
        <>
            <select name='ca' onChange={myFunction}>
                <option value='전체'>전체</option>
                <option value='내과'>내과</option>
                <option value='이비인후과'>이비인후과</option>
            </select>
            <div id="map" style={{ width: "100%", height: "600px" }}></div>
        </>
    );
}

export default Map;