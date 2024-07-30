import useScrollToTop from "../functions/useScrollToTop";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DestCard from "../components/DestCard";
import Destacados from "../components/Destacados";
import { Helmet } from "react-helmet-async";
import { useProducts } from "../context/ProductsContext";
import Sort from "../assets/iconos/sort.svg";

const ProductCat = () => {

    const [subCat, setSubCat] = useState("");
    const { productList } = useProducts();
    const [filter, setFilter] = useState("");
    const [productsToPut, setProductsToPut] = useState([])

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
        } else if (cat == "otros") {
            return "Otros Productos"
        }
    }

    const title = titleIf();

    const filterProducts = () => {
        if (cat == "todos") {
            return [...productList]
        } else if (cat == "aires") {
            return productList.filter(productos => productos.categoria.includes(cat))
        } else if (cat == "otros") {
            return productList.filter(productos => productos.categoria.includes(cat))
        } else if (cat == "calefactores") {
            if (subCat == "") {
                return productList.filter(productos => productos.categoria.includes(cat))
            } else if (subCat == "pellet") {
                return productList.filter(productos => productos.subcategoria?.includes("pellet"))
            } else if (subCat == "leña") {
                return productList.filter(productos => productos.subcategoria?.includes("leña"))
            }
        }
    }

    const sortProducts = (products) => {
        if (filter === "menor") {
            return products.sort((a, b) => a.precio - b.precio);
        } else if (filter === "mayor") {
            return products.sort((a, b) => b.precio - a.precio);
        }
        return products;
    };

    useEffect(() => {
        const filtered = filterProducts();
        const sorted = sortProducts(filtered);
        setProductsToPut(sorted);
    }, [cat, subCat, filter, productList]);

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
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "" ? "border-b-2 border-blue-600" : ""}`} onClick={() => { setSubCat("") }}>Todos los calefactores</h2>
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "pellet" ? "border-b-2 border-blue-600" : ""}`} onClick={() => { setSubCat("pellet") }}>Calefactores a pellet</h2>
                        <h2 className={`hover:cursor-pointer hover:text-gray-800 mx-2 ${subCat == "leña" ? "border-b-2 border-blue-600" : ""}`} onClick={() => { setSubCat("leña") }}>Calefactores a leña</h2>
                    </div>}
                </div>
                <div className="flex flex-row gap-4 pt-4">
                    <h1>Ordenar por:</h1>
                    <div className="flex flex-row items-center"><img src={Sort} alt="Icono de ordenar elementos" /><h1 className="hover:cursor-pointer hover:text-gray-600" onClick={() => { setFilter("menor") }}>Menor Precio</h1></div>
                    <div className="flex flex-row items-center"><img src={Sort} alt="Icono de ordenar elementos" /><h1 className="hover:cursor-pointer hover:text-gray-600" onClick={() => { setFilter("mayor") }}>Mayor Precio</h1></div>
                </div>
                <div className="producto pt-4">
                    {productsToPut.map(item => (
                        <DestCard key={item.id} clase={"w-auto"} url={item.url} id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
                    ))}
                </div>
            </section>
            <Destacados />
        </main>
    )
}

export default ProductCat;