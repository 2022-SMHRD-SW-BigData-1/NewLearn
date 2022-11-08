// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// 여기가 위에 네비 바들??
const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        {/* container 이 부분은 삭제하지 마시오!!!! */}
        <Container fluid>
          <span className="mask bg-gradient-default opacity-8" />
          <div className="header-body">
            <Row></Row>
            <Row></Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
