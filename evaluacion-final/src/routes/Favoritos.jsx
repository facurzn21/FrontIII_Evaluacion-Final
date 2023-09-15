import React, { useContext } from "react";
import CardFavorite from "../components/CardFavorite";
import { UserContext } from "../contexts/UserContext";

const Favs = () => {
  const { favorites } = useContext(UserContext);
  console.log(`Rendering Favs with ${favorites.length} favorite(s)`);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((user) => (
          <CardFavorite user={user} key={user.id} /> // Y aquí también
        ))}
      </div>
    </>
  );
};
export default Favs;
