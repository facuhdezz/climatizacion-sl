import { useState } from "react";
import Close from '../assets/iconos/close.svg';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductDetailComp = ({ product }) => {

    const [modal, setModal] = useState("")

    const {addProduct} = useCart();

    const clickImg = () => {
        setModal((prevModal) => (prevModal === "" ? "active" : ""))
    }

    const handleAddProduct = () => {
        addProduct(product)
    }

    return (
        <article className="flex max-sm:flex-col gap-2 md:gap-4">
            {/* <article className="flex justify-center mx-auto w-full sm:flex-row-reverse gap-1 divide-x-2 basis-1/2">
                <div className="contenedor-1 basis-3/4 overflow-hidden border border-gray-300 rounded-md aspect-square">
                    <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer mx-auto object-contain w-full h-full" />
                </div>
                <div className="contenedor-2 flex flex-col float-start basis-1/4 gap-1">
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                </div>
            </article> */}
            <div className={`overflow-hidden border border-gray-300 rounded-md sm:basis-1/2 modal-container ${modal}`}>
                <img src={product.url} alt={product.descripcion} className="duration-200 hover:cursor-pointer w-full h-full foto" onClick={clickImg}/>
                <div className={`close-modal ${modal} bg-white w-[60px] h-[60px] rounded-lg`} onClick={clickImg}>
                    <img src={Close} alt="Icono de cerrar" className="w-full h-full hover:cursor-pointer duration-200 boton"/>
                </div>                
            </div>
            <article className="flex flex-col gap-1 basis-1/2">
                <h1 className="text-blue-800 sm:text-lg">{product.nombre}</h1>
                <h1 className="font-semibold text-xl sm:text-3xl 2xl:text-[2.3rem] 2xl:leading-[3rem] leading-tight">{product.descripcion}</h1>
                <h1 className="text-xl sm:text-2xl 2xl:text-3xl mt-2 2xl:my-4 text-blue-900">{product.moneda} <span className="font-bold">{product.precio}</span> <span className="text-gray-600 text-base">IVA INC.</span></h1>
                <div>
                    {product.opcionales && Object.entries(product.opcionales).map(([key, value]) => {
                        return (
                            <h2>{key}: <span className="text-blue-900">{product.moneda} <span className="font-semibold">{value}</span></span></h2>
                        )
                    })}
                </div>
                <div className="">
                    <h2 className="text-lg font-semibold">Características:</h2>
                    <div className="flex flex-col divide-y divide-gray-400 max-h-[200px] sm:max-h-[108px] xl:max-h-[150px] overflow-y-scroll rounded-md">
                        {Object.entries(product.caracteristicas).map(([key, value]) => {
                            return (
                            // <li className="text-base">{key}: <span className="font-semibold">{value}</span></li>
                            <div className="flex divide-x divide-gray-400 text-base sm:text-sm xl:text-base">
                                <div className="bg-gray-200 basis 1/2 w-full p-3 sm:p-2 xl:p-3"><h1 className="text-black">{key}:</h1></div>
                                <div className="bg-gray-100 basis 1/2 w-full p-3 sm:p-2 xl:p-3"><h1 className="text-black font-semibold">{value}</h1></div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-row gap-2 pt-2">
                    <Link to={"/carrito"} className="w-full"><button className="w-full bg-green-700 hover:bg-green-900 text-white rounded p-2" onClick={handleAddProduct}>Comprar</button></Link>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 rounded p-2 border" onClick={handleAddProduct}>Agregar al carrito</button>
                </div>
            </article>
        </article>
    )
}

export default ProductDetailComp;