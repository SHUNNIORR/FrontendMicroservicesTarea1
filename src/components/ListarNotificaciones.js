import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import NotificationContext from "../context/NotificationContext";

const ListarNotificaciones = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(NotificationContext); // ⬅️
  const { notificaciones, getNotis } = ctx; //
  const getNotifications = async() => {
    try {
      setIsLoading(true);
      await getNotis();
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

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
