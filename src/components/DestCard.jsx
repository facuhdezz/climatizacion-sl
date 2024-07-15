import { Link } from "react-router-dom";
import useScrollToTop from "../functions/useScrollToTop";

const DestCard = (item) => {

    const scrollToTop = useScrollToTop()

    return (
        <article className={`flex flex-col bg-gray-50 border shrink-0 p-2 gap-2 justify-between rounded border-t-4 border-t-transparent hover:border-t-blue-600 ${item.clase}`}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-[80%] aspect-square">
                    <Link to={"/product/" + item.id}><img className="w-auto h-auto" src={item.url} alt={item.descripcion} onClick={scrollToTop}/></Link>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xs text-blue-800">{item.nombre}</h3>
                    <h1 className="text-sm">{item.descripcion}</h1>
                    <h4 className="text-sm">{item.moneda} <span className="font-bold">{item.precio}</span></h4>
                </div>
            </div>            
            <Link to={"/product/" + item.id} className="text-center" onClick={scrollToTop}><button className="border rounded bg-white px-2">Ver más</button></Link>
        </article>
    )
}

export default DestCard;