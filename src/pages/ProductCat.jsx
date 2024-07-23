import useScrollToTop from "../functions/useScrollToTop";
import productos from "../assets/products/productos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DestCard from "../components/DestCard";
import Destacados from "../components/Destacados";
import { Helmet } from "react-helmet-async";

const ProductCat = () => {

    const scrollToTop = useScrollToTop();

    useEffect(() => {
        scrollToTop();
    }, [])

    const { cat } = useParams()

    const titleIf = () => {
        if (cat == "todos") {
            return "Todos los productos";
        } else if (cat == "aires") {
            return "Aires Acondicionados";
        } else if (cat == "calefactores") {
            return "Calefactores";
        } 
    }

    const title = titleIf();

    const filteredProducts = () => {
        if (cat == "todos"){
            return [...productos]
        } else {
            return productos.filter(productos => productos.categoria.includes(cat))
        }
    }
    const productsToPut = filteredProducts();

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`Encuentre los mejores productos de ${title} a un precio increíble!`} />
            </Helmet>
            <section className="py-8 flex flex-col gap-4">
                <div>
                    <h1 className='text-xl font-semibold lg:text-3xl'>{title}</h1>
                </div>
                <div className="producto">
                    {productsToPut.map(item => (
                        <DestCard key={item.idx + 1000} clase={"w-auto"} url={item.url} idx={item.idx} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
                    ))}
                </div>
            </section>
            <Destacados />
        </main>
    )
}

export default ProductCat;