import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  return (
    <div className="item-detail-wrapper">
      <Item {...detail}>
        <button onClick={() => addItem(detail)}>Enviar al carrito</button>
      </Item>
    </div>
  );
};
