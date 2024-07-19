import { Link } from 'react-router-dom';
import Map from '../assets/imagenes/mapa-1.webp';

const Aside = () => {
    return (
        <aside className="col-span-1 max-lg:hidden p-4 flex flex-col gap-1">
            <article className="text-base 2xl:text-lg flex flex-col gap-1 divide-y divide-gray-400">
                <h1 className=" text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Productos</h1>
                <div className='flex flex-col divide-y divide-gray-300 py-2'>
                    <Link to={"/calefactores"} className="hover:bg-gray-300 ml-3"><h3 className="text-sm 2xl:text-base duration-200 px-2 py-1">Calefactores</h3></Link>
                    <Link to={"/aires"} className="hover:bg-gray-300 ml-3"><h3 className="text-sm 2xl:text-base duration-200 px-2 py-1">Aires acondicionados</h3></Link>
                    <Link to={"/todos"} className="hover:bg-gray-300 ml-3"><h3 className="text-sm 2xl:text-base duration-200 px-2 py-1">Todos los productos</h3></Link>
                    <Link className="hover:bg-gray-300 ml-3"><h3 className="text-sm 2xl:text-base duration-200 px-2 py-1">Otros productos</h3></Link>
                </div>
                <h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Mantenimiento</h1>
                <h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Otros servicios</h1>
                <h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Sobre nosotros</h1>
            </article>
            <article className="flex flex-col gap-1 mt-4">
                <h1 className="font-semibold py-1 px-2 text-lg 2xl:text-xl">¿Dónde encontrarnos?</h1>
                <a href="https://maps.app.goo.gl/38BwenRWHDBP9tkz7" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-gray-400 hover:cursor-pointer overflow-hidden"><img src={Map} alt='Mapa señalando la dirección del local: Tajes esquina Nardone, Santa Lucía, Canelones' className="hover:scale-110 duration-200" /></a>
            </article>
        </aside>
    )
}

export default Aside;