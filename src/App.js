import './app.css'
import ListarCryptos from './components/ListarCryptos';
import ListarNotificaciones from "./components/ListarNotificaciones";

function App() {
  
  return (
    <div className="App">
      <h1 className="main-title">Notificaciones</h1>
      <ListarNotificaciones/>
      <ListarCryptos/>
    </div>
  );
}

export default App;
