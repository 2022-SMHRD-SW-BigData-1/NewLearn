// reactstrap components
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
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [user_name, setName] = useState("");
  const [user_id, setId] = useState("");
  const [user_pw, setPw] = useState("");
  const [user_phone, setPhone] = useState("");
  const [user_num, setNum] = useState("");
  const [user_addr, setAddr] = useState("");
  const [user_host, setHost] = useState("");
  const [user_ca, setCa] = useState("");

  const [chbutton, setButton] = useState(1);

  const handleJoin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/joinData", {
        name: user_name,
        id: user_id,
        pw: user_pw,
        phone: user_phone,
        num: user_num,
        addr: user_addr,
      })
      .then((res) => {
        if (res.data.result == "success") {
          alert("회원가입 성공");
          history.push("/auth");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  };
  const handleJoinH = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/joinDataH", {
        name: user_name,
        id: user_id,
        pw: user_pw,
        phone: user_phone,
        ca: user_ca,
        host: user_host,
        addr: user_addr,
      })
      .then((res) => {
        if (res.data.result == "success") {
          alert("회원가입 성공");
          history.push("/auth");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  };
  if (chbutton === 1) {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>회원페이지</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={(e) => setButton(1)}
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
                  onClick={(e) => setButton(0)}
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
                <small>Or sign up with credentials</small>
              </div>
              <Form role="form" onSubmit={handleJoin}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="이름"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="아이디"
                      type="text"
                      onChange={(e) => setId(e.target.value)}
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
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={(e) => setPw(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="핸드폰"
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="주민등록번호"
                      type="text"
                      onChange={(e) => setNum(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="주소"
                      type="text"
                      onChange={(e) => setAddr(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    회원가입
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>병원페이지</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={(e) => setButton(1)}
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
                  onClick={(e) => setButton(0)}
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
                <small>Or sign up with credentials</small>
              </div>
              <Form role="form" onSubmit={handleJoinH}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="병원이름"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="아이디"
                      type="text"
                      onChange={(e) => setId(e.target.value)}
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
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={(e) => setPw(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="병원번호"
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="병원주소"
                      type="text"
                      onChange={(e) => setAddr(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="이름"
                      type="text"
                      onChange={(e) => setHost(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="병원카테고리"
                      type="text"
                      onChange={(e) => setCa(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    병원가입
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
};

export default Register;
