import './App.css';


/* Components */
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
