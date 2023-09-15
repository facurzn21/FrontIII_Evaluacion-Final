import React, { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //Importer los favoritos del local storage si existen, de lo contrario usar un array vacio
  const initialFavorites = JSON.parse(localStorage.getItem("favoritos")) || [];
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState(initialFavorites);
  console.log(favorites);

  useEffect(() => {
    // llamada a la API para obtener los usuarios
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Guardar en el local storage cada vez que 'favorites' cambie
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favorites));
  }, [favorites]);

  const addOrRemoveFavorite = (user) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === user.id);
      if (isAlreadyFavorite) {
        // si ya es favorito, quitamos al usuario de los favoritos
        return prevFavorites.filter((fav) => fav.id !== user.id);
      } else {
        // si no, agregamos al usuario a los favoritos
        return [...prevFavorites, user];
      }
    });
  };

  return (
    <UserContext.Provider value={{ users, favorites, addOrRemoveFavorite }}>
      {children}
    </UserContext.Provider>
  );
};
