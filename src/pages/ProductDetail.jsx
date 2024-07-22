import { useEffect, useState } from "react";
import ProductDetailComp from "../components/ProductDetailComp";
import destacados from "../assets/products/destacados";
import { useParams } from "react-router-dom";
import Destacados from "../components/Destacados";
import ProductDetailForm from "../components/ProductDetailForm";
import useScrollToTop from "../functions/useScrollToTop";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {

    const scrollToTop = useScrollToTop();

    useEffect(() => {
        scrollToTop();
    }, [])

    const { id } = useParams()

    const [productUnique, setProductUnique] = useState(null)

    useEffect(() => {
        const productFilter = destacados.find(destacados => destacados.id == id)
        setProductUnique(productFilter)
    }, [id])

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300 mb-8">
            {productUnique && <Helmet>
                <title>{productUnique.nombre}</title>
                <meta name="description" content={productUnique.descripcion} />
            </Helmet>}
            <section className="flex flex-col w-full 2xl:w-[90%] m-auto px-3 gap-6 py-3 xl:py-8 mb-4 max-lg:items-center">
                {productUnique && <ProductDetailComp product={productUnique} />}
                {productUnique && <ProductDetailForm producto={productUnique} />}
            </section>
            <Destacados />
        </main>
    )
}

export default ProductDetail;