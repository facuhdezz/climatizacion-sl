import { ProductsProvider } from "./ProductsContext"

const AppProvider = ({children}) => {
    return (
        <ProductsProvider>
            {children}
        </ProductsProvider>
    )
}

export default AppProvider;