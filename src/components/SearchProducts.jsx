import { useEffect, useState } from "react";
import destacados from "../assets/products/destacados";
import Search from '../assets/iconos/search.svg';
import Close from '../assets/iconos/close.svg';
import { Link } from "react-router-dom";

const SearchProducts = () => {

    const [productsFiltered, setProductsFiltered] = useState([]);
    const [someProducts, setSomeProducts] = useState(true)
    const [productsSearch, setProductsSearch] = useState("");

    useEffect(() => {
        if (productsSearch.length == 0) {
            setProductsFiltered([])
            setSomeProducts(true)
        } else {
            const filteredProducts = destacados.filter((product) => product.descripcion.toLocaleLowerCase().includes(productsSearch.toLocaleLowerCase()) || product.categoria.toLocaleLowerCase().includes(productsSearch.toLocaleLowerCase()))
            if (productsFiltered.length > 0) {
                setSomeProducts(true)
            }
            setProductsFiltered(filteredProducts)
            setSomeProducts(filteredProducts.length > 0)
        }
    }, [productsSearch])

    return (
        <>
            <div className='flex gap-1 items-center bg-gray-400 w-[80%] sm:w-[90%] lg:w-[65%] h-7 rounded-sm p-2'>
                <img src={Search} alt='Buscar: ícono de lupa' />
                <input type="search" placeholder="Buscar" onInput={(event) => { setProductsSearch(event.target.value) }} value={productsSearch} className="search-input bg-transparent outline-none placeholder:text-gray-200 w-full" />
                <img src={Close} alt='Cerrar buscador.' className="hover:cursor-pointer hover:opacity-80 duration-200" onClick={() => setProductsSearch("")} />
            </div>
            {productsSearch && <div className="fixed top-[120px] left-0 w-full lg:top-20">
                <div className="max-sm:w-full sm:w-[80%] lg:w-[50%] mx-auto divide-y h-[75dvh] overflow-y-scroll">
                {productsFiltered.map((product) => (
                    <Link to={"/product/" + product.id}><div className="flex gap-5 h-28 p-4 bg-white hover:bg-gray-100 duration-200 border-b">
                        <img src={product.url} alt={product.nombre} />
                        <div>
                            <p>{product.moneda} <span className="font-semibold">{product.precio}</span></p>
                            <p>{product.descripcion}</p>
                        </div>
                    </div></Link>
                ))}
                {!someProducts && <p className="bg-white text-center p-4 border-2 border-gray-700">No se encontraron productos.</p>}
                </div>
            </div>}
        </>
    )
}

export default SearchProducts;