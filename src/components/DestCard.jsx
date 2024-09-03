import { Link } from "react-router-dom";
import useScrollToTop from "../functions/useScrollToTop";
import CartIcon from "../assets/iconos/cart.svg";

const DestCard = (item) => {

    const scrollToTop = useScrollToTop()

    return (
        <article className={`flex flex-col bg-gray-50 border shrink-0 p-2 gap-2 justify-between rounded border-t-4 border-t-transparent hover:border-t-blue-600 ${item.clase}`}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-square">
                    <Link to={"/product/" + item.id}><img className="w-auto h-auto" src={item.url} alt={item.descripcion} onClick={scrollToTop}/></Link>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-blue-800">{item.nombre}</h1>
                    <h4 className="text-base mb-1">{item.moneda} <span className="font-bold">{item.precio}</span></h4>
                    <h3 className="text-sm h-[60px] overflow-hidden">{item.descripcion}</h3>
                </div>
            </div>            
            <Link to={"/product/" + item.id} className="text-center" onClick={scrollToTop}>{item.conditional ? <button className="rounded bg-cyan-900 hover:bg-cyan-700 text-white font-medium px-2">Ver más</button> : <button className="flex flex-row mx-auto items-center gap-2 rounded bg-cyan-900 hover:bg-cyan-700 text-white text-sm font-medium p-2"><img src={CartIcon} alt="icono de bolsa de compras (carrito de compras)" />Agregar al carrito</button>}</Link>
        </article>
    )
}

export default DestCard;