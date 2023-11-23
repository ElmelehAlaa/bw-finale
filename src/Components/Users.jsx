import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../redux/actions";
import ModifyUsers from "./ModifyUsers";

const Users = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users.content);
  console.log(userState);
  return (
    <Container>
      {userState.lenght !== 0 ? (
        <>
          {userState.map((clienti, i) => (
            <Row key={i}>
              <Col>{clienti.id}</Col>
              <Col>
                {clienti.nome} {clienti.cognome}
              </Col>
              <Col>{clienti.email}</Col>
              <Col>{clienti.username}</Col>
              <Col>
                <Button onClick={() => dispatch(deleteUsers(clienti.id))}>Remove</Button>
              </Col>
              <Col>
                <ModifyUsers idProp={clienti.id} />
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <>NON CI SONO User</>
      )}
    </Container>
  );
};
export default Users;
