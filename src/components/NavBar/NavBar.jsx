import "./navbar.css";
import corsairLogo from "../../assets/logo-corsair.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={corsairLogo} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/teclados" className="category" >Teclado</Link>
        </li>
        <li>
          <Link to="/category/mouse" className="category" >Mouse</Link>
        </li>
        <li>
          <Link to="/category/auriculares" className="category" >Auriculares</Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBar;