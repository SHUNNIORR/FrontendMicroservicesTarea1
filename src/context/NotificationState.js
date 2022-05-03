import { useEffect, useReducer } from "react";
import NotificationContext from "./NotificationContext";
import NotificationReducer from "./NotificationReducer";
import { serviceGetNotifications } from "../services/notifications";

const NotificationState = (props) => {
    const initialState={
        notificaciones:[]
    }
    const [globalState, dispatch] = useReducer(NotificationReducer, initialState)
    const getNotis = async() => { 
        try {
            const res = await serviceGetNotifications();
            dispatch({
              type: "READ_NOTIFICATIONS",
              payload: res,
            });
          } catch (error) {
            console.log(error);
          }
     }
     useEffect(() => {
        getNotis()
     }, [])
     
  return (
    <NotificationContext.Provider 
        value={{
            notificaciones: globalState.notificaciones,
            getNotis
        }}
    >
        {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationState