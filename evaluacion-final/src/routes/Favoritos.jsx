import React, { useContext } from "react";
import MyCard from "../components/Card";
import { UserContext } from "../contexts/UserContext";
import Cards from "../components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favorites } = useContext(UserContext);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((user) => (
          <MyCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;