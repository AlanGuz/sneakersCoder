import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Bienvenido"/>
    </div>
    
  )
}

export default App