import "./cartwidget.css"
import carrito from "../assets/carrito.png";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <img className="logo-cartwidget" src={carrito} alt="" />
      <p>6</p>
    </div>
  )
}

export default CartWidget