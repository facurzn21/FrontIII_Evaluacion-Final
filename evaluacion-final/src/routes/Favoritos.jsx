import React, { useContext } from "react";
import MyCard from "../components/Card";
import { UserContext } from "../contexts/UserContext";

const Favs = () => {
  const { favorites } = useContext(UserContext);
  console.log(`Rendering Favs with ${favorites.length} favorite(s)`);
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
