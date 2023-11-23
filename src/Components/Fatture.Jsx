import { Col, Container, Row } from "react-bootstrap";
import ListaFatture from "./ListaFatture";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFatture } from "../redux/actions";

function Fatture() {
  const fattureFetched = useSelector((state) => state.fatture.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFatture());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <div className="card">
            <img
              style={{ height: "214px" }}
              src="https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/fatturazione-elettronica-150508102903.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Crea Fattura</h5>
              <a href="/fatture" className="btn btn-primary">
                Crea
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          {fattureFetched &&
            fattureFetched.content &&
            fattureFetched.content.data &&
            fattureFetched.content.data.length !== 0 &&
            fattureFetched.content.data.map((singleFattura) => (
              <ListaFatture key={singleFattura.id} fatturaFetched={singleFattura} />
            ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Fatture;
