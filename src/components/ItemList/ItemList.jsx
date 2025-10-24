import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list-container">
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id} className="item-link">
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p className="no-products-message">No hay productos</p>
      )}
    </div>
  );
};
