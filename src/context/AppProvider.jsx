import { CartProvider } from "./CartContext";
import { ProductsProvider } from "./ProductsContext"

const AppProvider = ({children}) => {
    return (
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    )
}

export default AppProvider;