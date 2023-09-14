import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container, } from 'reactstrap';
import { UserContext } from '../contexts/UserContext';
import doctorImage from '../../public/images/doctor.jpg';
import './Card.css';

const MyCard = ({ user }) => {
  const navigate = useNavigate();
  const { favorites, addOrRemoveFavorite } = useContext(UserContext);

  const isFavorite = favorites.some(fav => fav.id === user.id);

  return (
    <Card className="myCard">
      <div className="cardImage">
        <img className="cardImg" src={doctorImage} alt="Doctor" />
      </div>
      <CardBody>
        <CardTitle tag="h6">{user.name}</CardTitle>
        <CardSubtitle tag="h7" className="mb-2 text-muted">{user.username}</CardSubtitle>
      </CardBody>
      <Button
        className={`favoriteBtn ${isFavorite ? "favorite" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          addOrRemoveFavorite(user);
        }}
      >
        ☆
      </Button>
      <Button
        className="detailsBtn mt-3"
        onClick={() => navigate(`/details/${user.id}`)}
      >
        Ver Detalles
      </Button>
    </Card>
  );
};

const Cards = (props) => {
  const { users } = useContext(UserContext);
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col sm="3" key={user.id}>
            <MyCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;