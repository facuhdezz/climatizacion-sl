import { useEffect, useState } from "react";
import ProductDetailComp from "../components/ProductDetailComp";
import destacados from "../assets/products/destacados";
import { useParams } from "react-router-dom";
import Destacados from "../components/Destacados";
import ProductDetailForm from "../components/ProductDetailForm";

const ProductDetail = () => {
    const {id} = useParams()

    const [productUnique, setProductUnique] = useState(null)

    useEffect(() => {
        const productFilter = destacados.find(destacados => destacados.id == id)
        setProductUnique(productFilter)
    }, [id])    

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300">
            <section className="flex max-sm:flex-col w-full 2xl:w-[90%] m-auto px-3 gap-2 sm:gap-4 py-3 xl:py-8 mb-4">
                {productUnique && <ProductDetailComp  product={productUnique} />}
                <ProductDetailForm />    
            </section>            
            <Destacados />
        </main>
    )
}

export default ProductDetail;