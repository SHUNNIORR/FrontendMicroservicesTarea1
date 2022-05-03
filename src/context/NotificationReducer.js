import React from 'react'

const NotificationReducer = (globalState, action) => {
    switch (action.type) {
      case "READ_NOTIFICATIONS":
        return {
          ...globalState,
          notificaciones: action.payload,
        };
    }
  };

export default NotificationReducer