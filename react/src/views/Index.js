import { useState, useEffect } from "react";
import { CardHeader } from "reactstrap";
import {
  Button,
  Card,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Badge,
  Col,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import axios from "axios";
import Modal from "react-modal";
import Write_board from "./examples/write_board";

const Index = () => {
  const [board, setBoard] = useState([]);
  const [modals, setModal] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/board")
      .then((res) => {
        if (res.data.result == "success") {
          console.log("값 들어온거 맞지?");

          console.log(res.data.t_board);
          setBoard(res.data.t_board);
          console.log(board[0].seqs);
        } else {
          console.log("값이 안들어왔다!!");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}

      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col>
                    <h2 className="mb-0">공지사항 </h2>
                  </Col>

                  {user ? (
                    user.admin != "U" ? (
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={() => setModal(true)}
                          size="sm"
                        >
                          게시글 작성
                        </Button>
                      </Col>
                    ) : null
                  ) : null}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col">작성자</th>
                    <th scope="col">작성날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {board.map((data) => {
                    return (
                      <tr>
                        <td scope="col">{data.seqs}</td>
                        <td scope="col">{data.titles}</td>
                        <td scope="col" />
                        <td scope="col" />
                        <td scope="col">admin</td>
                        <td scope="col">{data.dates}</td>
                        <td scope="col">
                          <Button>삭제</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <Modal
        isOpen={modals}
        onRequestClose={() => setModal(false)}
        className="loginFail"
      >
        <Write_board setModal={setModal}></Write_board>
      </Modal>
    </>
  );
};

export default Index;
