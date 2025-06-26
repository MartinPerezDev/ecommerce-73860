import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import EjemploContador from './components/ejemplos/EjemploContador';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer saludo={ "Bienvenidos a mi ecomerce" } />
      <EjemploContador />
    </div>
  )
}

export default App
