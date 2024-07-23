import { useState } from "react";
import Close from '../assets/iconos/close.svg';

const ProductDetailComp = ({ product }) => {

    const [modal, setModal] = useState("")

    const clickImg = () => {
        setModal((prevModal) => (prevModal === "" ? "active" : ""))
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
                <div className={`close-modal ${modal} bg-white w-[80px] h-[80px]`} onClick={clickImg}>
                    <img src={Close} alt="Icono de cerrar" className="w-full h-full hover:cursor-pointer duration-200 boton"/>
                </div>                
            </div>
            <article className="flex flex-col gap-1 basis-1/2">
                <h1 className="text-gray-600 sm:text-lg">{product.nombre}</h1>
                <h1 className="font-semibold text-xl sm:text-3xl leading-tight">{product.descripcion}</h1>
                <h1 className="text-lg sm:text-2xl">{product.moneda} <span className="font-bold">{product.precio}</span></h1>
                <div className="mt-2">
                    <h2 className="text-lg font-semibold">Características:</h2>
                    <ul>
                        {Object.entries(product.caracteristicas).map(([key, value]) => {
                            return (
                            <li className="text-base">{key}: <span className="font-semibold">{value}</span></li>
                            )
                        })}
                    </ul>
                </div>
            </article>
        </article>
    )
}

export default ProductDetailComp;