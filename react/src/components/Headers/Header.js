// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StoreImgList from "./ImgSlider";
import Carousel from "react-bootstrap/Carousel";

// 여기가 위에 네비 바들??
const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        {/* container 이 부분은 삭제하지 마시오!!!! */}
        <Container fluid>
          <div className="header-body">
            <Row>
              <h3>NEW LEARN</h3>
            </Row>
            <Row>
              <StoreImgList></StoreImgList>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
