import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs,  } from 'firebase/firestore';


const ProductsContext = createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
}

export const ProductsProvider = ({children}) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        const db = getFirestore();
        getDocs(collection(db, "products")).then(result => {
            setProductList(result.docs.map(product => ({id: product.id, ...product.data()})))
        });
    }, []);

    return (
        <ProductsContext.Provider value={{productList}}>
            {children}
        </ProductsContext.Provider>
    )
}