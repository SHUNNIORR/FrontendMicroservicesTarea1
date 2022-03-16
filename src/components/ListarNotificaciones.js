import axios from "axios";
import React, { useEffect, useState } from "react";
import { serviceGetNotifications } from "../services/notifications";

const ListarNotificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getNotifications = async() => {
    setIsLoading(true);
    setNotificaciones(await serviceGetNotifications())
    setIsLoading(false)
    console.log(notificaciones)
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
