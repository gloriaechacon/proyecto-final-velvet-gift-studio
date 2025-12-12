import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exist = (id) => {
        const exist = cart.some(prod => prod.id === id);
        return exist;
    };

    const addItem = (item) => {
        if(exist(item.id)) {
            alert("The product is already in the cart");
            return;
        }

        setCart([...cart, { ...item, quantity: 1 }]);
         alert(`${item.name} added to cart`);
    };

    const deleteItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    const total = () => {
        return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    };

    const checkout = () => {
        if (cart.length === 0) {
            alert("The cart is empty");
            return;
        }
        alert("Purchase completed successfully");
        clearCart();
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        if(cart.length){
            return cart.length;
        }
        return 0;
    }

    const values = {
        cart, addItem, deleteItem, total, checkout, clearCart, getTotalItems
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}