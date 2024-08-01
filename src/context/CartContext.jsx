import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {

    const [productCart, setProductCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('productCart');
        if (storedCart) {
            setProductCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('productCart', JSON.stringify(productCart));
    }, [productCart]);

    const addProduct = (product) => {
        setProductCart((prevProductCart) => [...prevProductCart, product]);
    }

    const deleteProduct = (id) => {
        const newCar = productCart.filter(item => item.id != id);
        setProductCart(newCar);
    }

    const clearCart = () => {
        setProductCart([]);
    }

    const totalProduct = () => {
        return productCart.length
    };

    return (
        <CartContext.Provider value={{ productCart, addProduct, deleteProduct, clearCart, totalProduct }}>
            {children}
        </CartContext.Provider>
    )
};