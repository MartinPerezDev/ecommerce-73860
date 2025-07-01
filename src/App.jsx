import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App
