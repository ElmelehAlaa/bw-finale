import { Col, Container, InputGroup, ListGroup, Row } from "react-bootstrap";

function Fatture() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <div class="card">
            <img
              style={{ height: "214px" }}
              src="https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/fatturazione-elettronica-150508102903.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Crea Fattura</h5>
              <a href="/fatture" class="btn btn-primary">
                Crea
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <ListGroup></ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
