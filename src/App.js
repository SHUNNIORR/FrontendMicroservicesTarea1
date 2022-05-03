import "./App.css";
import ListarCryptos from "./components/ListarCryptos";
import ListarNotificaciones from "./components/ListarNotificaciones";
import NotificationState from "./context/NotificationState";

function App() {
  
  return (
    <div>
      <NotificationState>
      <h1 className="main-title">Notificaciones y Cryptos</h1>
      <div className="App">
        <ListarNotificaciones />
        <ListarCryptos />
      </div>
      </NotificationState>

    </div>
  );
}

export default App;
