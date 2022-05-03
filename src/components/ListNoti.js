import React, { useContext } from "react";
import NotificationContext from "../context/NotificationContext";

const ListNoti = () => {
  const ctx = useContext(NotificationContext); // ⬅️
  const { notificaciones } = ctx; //
  console.log("ctx", ctx);
  return (
    <div>
      <h1>Listado de notificaciones</h1>
      {notificaciones.map((e, index) => {
        return (
          <div key={index}>
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListNoti;
