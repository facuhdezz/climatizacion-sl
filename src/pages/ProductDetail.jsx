import { useEffect, useState } from "react";
import ProductDetailComp from "../components/ProductDetailComp";
import destacados from "../assets/products/destacados";
import { useParams } from "react-router-dom";
import Destacados from "../components/Destacados";
import ProductDetailForm from "../components/ProductDetailForm";
import useScrollToTop from "../functions/useScrollToTop";

const ProductDetail = () => {

    const scrollToTop = useScrollToTop();

    useEffect(() => {
        scrollToTop();
    }, [])

    const {id} = useParams()

    const [productUnique, setProductUnique] = useState(null)

    useEffect(() => {
        const productFilter = destacados.find(destacados => destacados.id == id)
        setProductUnique(productFilter)
    }, [id])

    const serviceId = process.env.REACT_APP_SERVICE_ID || "";
    const templateProductId = process.env.REACT_APP_TEMPLATE_ID || "";
    const publicId = process.env.REACT_APP_PUBLIC || "";

    console.log(serviceId, templateProductId, publicId);

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300 mb-8">
            <section className="flex flex-col w-full 2xl:w-[90%] m-auto px-3 gap-6 py-3 xl:py-8 mb-4">
                {productUnique && <ProductDetailComp  product={productUnique} />}
                {productUnique && <ProductDetailForm producto={productUnique}/>}   
            </section>            
            <Destacados />
        </main>
    )
}

export default ProductDetail;