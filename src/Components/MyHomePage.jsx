import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClienti } from "../redux/actions";

function MyHomePage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClienti());
  });
  return (
    <Container>
      <Row>
        <h3>Benvenuto Utente</h3>
        <Col xs={12} md={4} lg={4}>
          <div class="card">
            <img
              style={{ height: "214px" }}
              src="https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/fatturazione-elettronica-150508102903.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Fatture</h5>
              <p class="card-text">Aggiungi Vedi fatture</p>
              <a href="/fatture" class="btn btn-primary">
                vai alle fatture
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <div class="card">
            <img
              style={{ height: "214px" }}
              src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170504970/77829658-immagine-a-colori-cartoon-met%C3%A0-corpo-donna-senza-volto-servizio-clienti-con-le-cuffie-illustrazione.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Clienti</h5>
              <p class="card-text">Aggiungi</p>
              <Button
                onClick={() => {
                  navigation("/clienti");
                }}
              >
                vai ai clienti
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <div class="card">
            <img
              style={{ height: "214px" }}
              src="https://img.favpng.com/3/20/7/users-group-computer-icons-png-favpng-5EqXtASeuUhR5aezfrBfLJr58.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Gestisci Utenti</h5>
              <p class="card-text">-Elimina -Modifica -Banna</p>
              <a href="/fatture" class="btn btn-primary">
                Gestisci
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default MyHomePage;
