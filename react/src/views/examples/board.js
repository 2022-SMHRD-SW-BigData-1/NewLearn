import {
  Container,
  UncontrolledTooltip,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useLocation } from "react-router-dom";
const Board = () => {
  const location = useLocation();

  console.log(location.state);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <div>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="7">
                  <h3 className="mb-0" name="tag1">
                    {location.state.title}
                  </h3>
                </Col>
                <Col className="text-right" xs="4">
                  <h6>{location.state.date}</h6>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              {/* Address */}

              <hr className="my-4" />
              {/* Description */}
              <div className="pl-lg-4">
                <Card>{location.state.content}</Card>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Board;
