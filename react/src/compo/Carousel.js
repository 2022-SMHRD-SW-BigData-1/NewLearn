import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
// import styled from "styled-components";

// const StyledSlider = styled(Slider)`
//   height: 100%;
//   width: 100%;
//   position: relative;
// `;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // slide: 'div',
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // 자동 재생
      autoplaySpeed: 5000,
      draggable: true,
      appendDots: (dots) => (
        <div
          style={{
            padding: "50px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <a href="https://www.naver.com/">
              <img
                className="sliderImg"
                src="https://www.amc.seoul.kr/asan/images/hospitalinfo/img_introRolling01.jpg"
                width="100%"
                height="400px"
              />
            </a>
          </div>
          <div>
            <a href="https://www.naver.com/">
              <img
                className="sliderImg"
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTVfMjE5/MDAxNTg2OTM1NTM2ODk5.00AUDsrNdhVIUkJyJSXTga4RKKb_cBt7mFT-OJUsmZkg.TZYwZiOPFM9ejU31q7SQlWRpgyCbRdejbc31uxySGt4g.JPEG.ohsk/KakaoTalk_20200415_160455546.jpg?type=w800"
                width="100%"
                height="400px"
              />
            </a>
          </div>
          <div>
            <a href="https://www.naver.com/">
              <img
                className="sliderImg"
                src="http://cdn.bosa.co.kr/news/photo/201901/2098294_141356_4545.jpg"
                width="100%"
                height="400px"
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
