import { ListGroup } from "react-bootstrap";

const ListaFatture = ({ singleFattura }) => {
  return (
    <>
      {singleFattura && (
        <ListGroup key={singleFattura.id}>
          <ListGroup.Item>{singleFattura}</ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
};
export default ListaFatture;
