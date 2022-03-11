import './app.css'
import ListarCryptos from './components/ListarCryptos';
import ListarNotificaciones from "./components/ListarNotificaciones";

function App() {
  
  return (
    <div>
      <h1 className="main-title">Notificaciones y Cryptos</h1>
    <div className="App">
      <ListarNotificaciones/>
      <ListarCryptos/>
    </div>

    </div>
  );
}

export default App;
