import useScrollToTop from "../functions/useScrollToTop";
import productos from "../assets/products/destacados";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DestCard from "../components/DestCard";
import Destacados from "../components/Destacados";

const ProductCat = () => {

    const scrollToTop = useScrollToTop();

    useEffect(() => {
        scrollToTop();
    }, [])

    const { cat } = useParams()

    const title = cat.charAt(0).toUpperCase() + cat.slice(1);

    const filteredProducts = () => {
        if (cat == "todos"){
            return [...productos]
        } else {
            return productos.filter(productos => productos.categoria == cat)
        }
    }
    const productsToPut = filteredProducts();

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300">
            <section className="py-8 flex flex-col gap-4">
                <div>
                    <h1 className='text-xl font-semibold lg:text-3xl'>{title}</h1>
                </div>
                <div className="producto">
                    {productsToPut.map(item => (
                        <DestCard key={item.id + 1} clase={"w-auto"} url={item.url} id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
                    ))}
                </div>
            </section>
            <Destacados />
        </main>
    )
}

export default ProductCat;