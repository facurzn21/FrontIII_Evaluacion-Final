import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "./CardFavorite.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import doctorImage from '../../public/images/doctor.jpg';

const CardFavorite = ({ user }) => {
  console.log(`Rendering ${user.name}`);
  const navigate = useNavigate();
  const { favorites, addOrRemoveFavorite } = useContext(UserContext);

  const isFavorite = favorites.some((fav) => fav.id === user.id);

  return (
    <Card className="myCard">
      <div className="cardImage">
        <img className="cardImg" src={doctorImage} alt="Doctor" />
      </div>
      <CardBody>
        <CardTitle tag="h6">{user.name}</CardTitle>
        <CardSubtitle tag="h7" className="mb-2 text-muted">
          {user.username}
        </CardSubtitle>
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

export default CardFavorite;