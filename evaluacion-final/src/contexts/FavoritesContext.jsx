import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (nuevoFavorito) => {
    setFavoritos(favoritos => [...favoritos, nuevoFavorito]);
  };

  const borrarFavorito = (favoritoAQuitar) => {
    setFavoritos(favoritos => favoritos.filter(f => f.id !== favoritoAQuitar.id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, borrarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};