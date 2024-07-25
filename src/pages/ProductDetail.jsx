import { useEffect, useState } from "react";
import ProductDetailComp from "../components/ProductDetailComp";
import { useParams } from "react-router-dom";
import Destacados from "../components/Destacados";
import ProductDetailForm from "../components/ProductDetailForm";
import useScrollToTop from "../functions/useScrollToTop";
import { Helmet } from "react-helmet-async";
import { useProducts } from "../context/ProductsContext";

const ProductDetail = () => {

    const scrollToTop = useScrollToTop();

    useEffect(() => {
        scrollToTop();
    }, [])

    const { id } = useParams()
    const {productList} = useProducts()
    const [productUnique, setProductUnique] = useState(null)

    useEffect(() => {
        const filteredProduct = productList.find(productos => productos.id == id)
        setProductUnique(filteredProduct)
    }, [id])

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300 pb-8 bg-white m-3 rounded-lg">
            {productUnique && <Helmet>
                <title>{productUnique.nombre}</title>
                <meta name="description" content={productUnique.descripcion} />
            </Helmet>}
            <section className="flex flex-col w-full 2xl:w-[90%] m-auto px-3 gap-6 max-xl:py-6 xl:py-8 mb-4 max-lg:items-center">
                {productUnique && <ProductDetailComp product={productUnique} />}
                {productUnique && <ProductDetailForm producto={productUnique} />}
            </section>
            <Destacados />
        </main>
    )
}

export default ProductDetail;