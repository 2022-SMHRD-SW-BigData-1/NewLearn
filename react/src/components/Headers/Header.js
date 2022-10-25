// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
// 여기가 위에 네비 바들??
const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        {/* container 이 부분은 삭제하지 마시오!!!! */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {/* 여기 차트 같은거 빼면 네비게이션 뺄수 있음 */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <h1>어서오세요</h1>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
