import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import Mypro from "compo/myProfile";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Mypro />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
