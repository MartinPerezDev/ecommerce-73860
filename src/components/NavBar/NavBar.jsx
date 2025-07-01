import "./navbar.css";
import corsairLogo from "../../assets/logo-corsair.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={corsairLogo} alt="" />

      <ul className="categories">
        <li>Teclados</li>
        <li>Mouse</li>
        <li>Auriculares</li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBar;