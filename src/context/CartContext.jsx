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

    const isInCart = (id) => {
        return productCart.some(item => item.id == id)
    }

    const addProduct = (product) => {
        if(isInCart(product.id)) {
            let index = productCart.findIndex(item => item.id == product.id);
            productCart[index].cantidad += 1;
            setProductCart([...productCart]);
        } else {
            productCart.push({...product, cantidad: 1});
            setProductCart([...productCart]);
        }
    }

    const deleteProduct = (id) => {
        const newCar = productCart.filter(item => item.id != id);
        setProductCart(newCar);
    }

    const clearCart = () => {
        setProductCart([]);
    }

    const totalProduct = () => {
        return productCart.reduce((cant, item) => cant += item.cantidad, 0)
    };

    return (
        <CartContext.Provider value={{ productCart, addProduct, deleteProduct, clearCart, totalProduct }}>
            {children}
        </CartContext.Provider>
    )
};