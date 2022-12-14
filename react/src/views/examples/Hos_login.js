import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { React, useRef, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";

const Hos_Login = (props) => {
  const history = useHistory();
  const [ids, setID] = useState("");
  const [pws, setPw] = useState("");
  const [modals, setModal] = useState(false);
  // 병원 로그인
  const handleHosLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/hosLogin", {
        id: ids,
        pw: pws,
      })
      .then((res) => {
        if (res.data.result == "success") {
          try {
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: res.data.id,
                pw: res.data.pw,
                nick: res.data.nick,
                hosp_num: res.data.num,
              })
            );
          } catch (error) {
            console.log("값 안들어가졌다");
          }
          console.log(JSON.parse(localStorage.getItem("user")).nick);
          history.push("/admin/index");
        } else {
          alert("로그인 실패");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>병원 로그인</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => props.setButton(1)}
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-circle-08" />
                </span>
                <span className="btn-inner--text">회원</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => props.setButton(0)}
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-badge" />
                </span>
                <span className="btn-inner--text">병원</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleHosLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(e) => {
                      setID(e.target.value);
                    }}
                    placeholder="아이디"
                    type="text"
                    // autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(e) => {
                      setPw(e.target.value);
                    }}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a className="text-light" href="#pablo" to="/auth/login" tag={Link}>
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Hos_Login;
