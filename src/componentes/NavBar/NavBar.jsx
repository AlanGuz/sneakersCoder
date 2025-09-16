import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {

  return (
    <header>
      <Link to="/">
        <h1>SneakerMotion</h1>
      </Link>
        
        <nav>
            <ul>
                <li>
                  <Link to="/categoria/hombre">Hombre</Link>
                </li>
                <li>
                  <Link to= "/categoria/mujer">Mujer</Link>
                </li>
                <li>
                  <Link to="/categoria/niños">Niños</Link>
                </li>            
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar