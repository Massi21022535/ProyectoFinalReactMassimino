import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/category/Nike"}>Botines Nike</Link>
        </li>
        <li>
          <Link to={"/category/Adidas"}>Botines Adidas</Link>
        </li>

        <li className="cart-item">
          <Link to="/cart">Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
