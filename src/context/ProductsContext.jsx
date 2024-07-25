import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where,  } from 'firebase/firestore';


const ProductsContext = createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
}

export const ProductsProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("precio", ">", "0"))
        getDocs(q).then(result => {
            setProductList(result.docs.map(product => ({id: product.id, ...product.data()})));
            setLoading(false);
        });
    }, []);

    return (
        <ProductsContext.Provider value={{productList, loading}}>
            {children}
        </ProductsContext.Provider>
    )
}