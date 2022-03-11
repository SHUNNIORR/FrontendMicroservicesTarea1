import axios from "axios";
import React, { useEffect, useState } from "react";

const ListarNotificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getNotifications = () => {
    setIsLoading(true);
    axios
      .get(
        "http://ec2-3-145-167-71.us-east-2.compute.amazonaws.com:4000/usuarios/notifications/1"
      )
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setNotificaciones(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="notificacioneslist_container">
      
      <div className="noti_header">
        <h2>Listado de notificaciones</h2>
        <button
          className="button-refresh"
          onClick={() => {
            getNotifications();
          }}
        >
          <img
            width="20"
            height="20"
            src="https://icon-library.com/images/refresh-icon-white/refresh-icon-white-1.jpg"
          />
        </button>
      </div>
      {isLoading ? <div class="spinner"></div> : null}

      {notificaciones.map((notificacion, index) => (
        <div key={index} className="noti_container">
          <div className="title_container">
            <p className="noti_title">{notificacion.title}</p>
          </div>
          <div className="description_container">
            <p className="noti_description">{notificacion.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListarNotificaciones;
