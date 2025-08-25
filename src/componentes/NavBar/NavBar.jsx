import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
  return (
    <header>
        <h1>SneakerMotion</h1>
        <nav>
            <ul>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Niños</li>            
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar