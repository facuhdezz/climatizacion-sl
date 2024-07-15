import { Link } from 'react-router-dom';
import Map from '../assets/imagenes/mapa-1.webp';

const Aside = () => {
    return (
        <aside className="col-span-1 max-lg:hidden p-4 flex flex-col gap-1">
            <article className="text-md 2xl:text-lg flex flex-col gap-1">
                <h1 className="bg-gray-300 text-black font-semibold rounded-md py-1 px-2 text-lg 2xl:text-xl">Productos</h1>
                <Link to={"/calefactores"}><h3 className="bg-gray-200 hover:bg-gray-300 duration-200 ml-2 rounded-md px-2">Calefactores</h3></Link>
                <Link to={"/aires"}><h3 className="bg-gray-200 hover:bg-gray-300 duration-200 ml-2 rounded-md px-2">Aires acondicionados</h3></Link>
                <Link to={"/todos"}><h3 className="bg-gray-200 hover:bg-gray-300 duration-200 ml-2 rounded-md px-2">Todos los productos</h3></Link>
                <h3 className="bg-gray-200 hover:bg-gray-300 duration-200 ml-2 rounded-md px-2">Otros productos</h3>
            </article>
            <h1 className="bg-gray-300 text-black font-semibold rounded-md py-1 px-2 text-lg 2xl:text-xl">Mantenimiento</h1>
            <h1 className="bg-gray-300 text-black font-semibold rounded-md py-1 px-2 text-lg 2xl:text-xl">Otros servicios</h1>
            <h1 className="bg-gray-300 text-black font-semibold rounded-md py-1 px-2 text-lg 2xl:text-xl">Sobre nosotros</h1>
            <article className="flex flex-col gap-1 mt-4">
                <h1 className="font-semibold rounded-md py-1 px-2 text-lg 2xl:text-xl">¿Dónde encontrarnos?</h1>
                <a href="https://maps.app.goo.gl/38BwenRWHDBP9tkz7" target="_blank" className="rounded-xl hover:cursor-pointer overflow-hidden"><img src={Map} alt='Mapa señalando la dirección del local: Tajes esquina Nardone, Santa Lucía, Canelones' className="hover:scale-110 duration-200"/></a>
            </article>
        </aside>
    )
}

export default Aside;