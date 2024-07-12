import { useEffect, useState } from "react";
import ProductDetailComp from "../components/ProductDetailComp";
import destacados from "../assets/products/destacados";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams()

    const [productUnique, setProductUnique] = useState(null)

    useEffect(() => {
        const productFilter = destacados.find(destacados => destacados.id == id)
        setProductUnique(productFilter)
    }, [id])    

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3">
            {productUnique && <ProductDetailComp  product={productUnique} />}
        </main>
    )
}

export default ProductDetail;