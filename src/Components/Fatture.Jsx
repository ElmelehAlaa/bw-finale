import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFatture } from "../redux/actions";
import CreateFatture from "./CreateFatture";
import { useNavigate } from "react-router-dom";

const Fatture = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <Container className="fatture-container">
      <Row>
        <Col xs={12} md={6} lg={6}>
          <div className="card">
            <img
              style={{ height: "214px", objectFit: "contain" }}
              src="https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/fatturazione-elettronica-150508102903.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Crea Fattura</h5>
              <CreateFatture />
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <div className="card">
            <img
              style={{ height: "214px", objectFit: "contain" }}
              src="https://img.freepik.com/premium-vector/cartoon-magnifying-glass-vector-hand-drawn-illustration-isolated-transparent-background_20412-956.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Visualizza Fatture</h5>
              <Button
                onClick={() => {
                  navigation("/visualizza-fatture");
                }}
              >
                Visualizza
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Fatture;
