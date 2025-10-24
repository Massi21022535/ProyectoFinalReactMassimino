import { useState } from "react";
import {CartContext} from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exists = cart.some(p => p.id === id);
        return exists;
    };

    const addItem = (item) => {
        if(exists(item.id)){
            alert("El producto ya esta en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    };

    const clearCart = () => {
        setCart([])
    }

    const getTotalItems = () => {
        return cart.length;
    }

    const values = {
        cart: cart, addItem: addItem, clearCart: clearCart, getTotalItems: getTotalItems
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}