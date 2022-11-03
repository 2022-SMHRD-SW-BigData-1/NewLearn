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
import axios from "axios";
import { useState } from "react";

const Write_board = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const sendBoard = () => {
    axios
      .post("http://127.0.0.1:3001/SendBoard", {
        titles: title,
        contents: content,
      })
      .then((res) => {
        if (res.data.result == "success") {
          props.setModal(false);
          alert("등록성공");
          window.location.reload();
        } else {
          alert("등록실패");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  };

  return (
    <>
      <div className="board">
        <div>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="7">
                  <h3 className="mb-0" name="tag1">
                    게시글 작성
                  </h3>
                </Col>
                <Col className="text-right" xs="4">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={sendBoard}
                    size="sm"
                  >
                    등록
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                {/* Address */}
                <div className="pl-lg-4">
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-address"
                          placeholder="제목"
                          type="text"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                {/* Description */}
                <div className="pl-lg-4">
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      rows="10"
                      defaultValue="내용입니다."
                      type="textarea"
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Write_board;
