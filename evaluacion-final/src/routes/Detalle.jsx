import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => setUser(data))
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, [id]);

  return (
    <div>
      {!user ? <p> Aún no se ha seleccionado nada, haz clic en alguno de los usuarios para ver más detalles.</p>
        : (
          <div>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <a href={`http://${user.website}`}>{user.website}</a>
            <p>{user.email}</p>
          </div>
        )
      }
    </div>
  );
};

export default Detail