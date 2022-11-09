import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Hosposts from "compo/Hosposts";

const Maps = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            {/* <Card className="shadow border-0"> */}
            <Hosposts />
            {/* </Card> */}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
