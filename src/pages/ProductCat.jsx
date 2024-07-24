import useScrollToTop from "../functions/useScrollToTop";
import productos from "../assets/products/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DestCard from "../components/DestCard";
import Destacados from "../components/Destacados";
import { Helmet } from "react-helmet-async";

const ProductCat = () => {

    const [subCat, setSubCat] = useState("");

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
        if (cat == "todos") {
            return [...productos]
        } else if (cat == "aires") {
            return productos.filter(productos => productos.categoria.includes(cat))
        } else if (cat == "calefactores") {
            if (subCat == "") {
                return productos.filter(productos => productos.categoria.includes(cat))
            } else if (subCat == "pellet") {
                return productos.filter(productos => productos.subcategoria?.includes("pellet"))
            } else if (subCat == "leña") {
                return productos.filter(productos => productos.subcategoria?.includes("leña"))
            }
        }
    }
    
    const productsToPut = filteredProducts();

    useEffect(() => {
       const productsToPut = filteredProducts(); 
    }, [subCat])

    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300 bg-white m-3 rounded-lg">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`Encuentre los mejores productos de ${title} a un precio increíble!`} />
            </Helmet>
            <section className="py-4 flex flex-col gap-4 divide-y divide-gray-300">
                <div className="flex flex-col 2xl:flex-row gap-2 2xl:items-end 2xl:gap-10">
                    <h1 className='text-2xl font-semibold lg:text-[2.2rem] text-blue-800'>{title}</h1>
                    {(cat == "calefactores") && <div className="flex flex-wrap gap-1 max-sm:text-sm sm:gap-4 text-gray-600">
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "" ? "border-b-2 border-blue-600" : ""}`} onClick={() => {setSubCat("")}}>Todos los calefactores</h2>
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "pellet" ? "border-b-2 border-blue-600" : ""}`} onClick={() => {setSubCat("pellet")}}>Calefactores a pellet</h2>
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "leña" ? "border-b-2 border-blue-600" : ""}`} onClick={() => {setSubCat("leña")}}>Calefactores a leña</h2>
                    </div>}
                </div>
                <div className="producto pt-4">
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