import { Link } from 'react-router-dom';
import Map from '../assets/imagenes/mapa-1.webp';
import Home from '../assets/iconos/home.svg'
import Info from '../assets/iconos/info.svg'
import Products from '../assets/iconos/products.svg'
import Location from '../assets/iconos/location.svg'

const Aside = () => {
    return (
        <aside className="col-span-1 max-lg:hidden">
            <div className=' bg-white my-3 ml-3 rounded-lg p-4 flex flex-col gap-1'>
                <article className="text-base 2xl:text-lg flex flex-col divide-y divide-gray-300">
                    <Link to={"/"} className="hover:bg-gray-200 flex items-center pl-2"><img src={Home} className='h-5' alt='ícono de inicio' /><h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Inicio</h1></Link>
                    <Link to={"/about"} className="hover:bg-gray-200 flex items-center pl-2"><img src={Info} className='h-5' alt='ícono de informacion' /><h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Sobre nosotros</h1></Link>
                    <Link to={"/todos"} className="hover:bg-gray-200 flex items-center pl-2"><img src={Products} className='h-5' alt='ícono de productos' /><h1 className=" text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Productos</h1></Link>
                    <div className='flex flex-col divide-y divide-gray-200 py-2'>
                        <Link to={"/calefactores"} className="hover:bg-gray-100 ml-3"><h2 className="text-sm 2xl:text-base duration-200 px-2 py-1">Calefactores</h2></Link>
                        <Link to={"/aires"} className="hover:bg-gray-100 ml-3"><h2 className="text-sm 2xl:text-base duration-200 px-2 py-1">Aires acondicionados</h2></Link>
                        <Link to={"/todos"} className="hover:bg-gray-100 ml-3"><h2 className="text-sm 2xl:text-base duration-200 px-2 py-1">Todos los productos</h2></Link>
                        <Link to={"/otros"} className="hover:bg-gray-100 ml-3"><h2 className="text-sm 2xl:text-base duration-200 px-2 py-1">Otros productos</h2></Link>
                    </div>
                    {/* <h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Mantenimiento</h1>
                    <h1 className="text-black font-semibold py-1 px-2 text-base 2xl:text-lg">Otros servicios</h1> */}
                </article>
                <article className="flex flex-col gap-1 mt-4">
                    <div className="flex items-center px-2 gap-1"><img src={Location} className='h-6' alt='ícono de ubicación' /><h1 className="font-semibold py-1 text-lg 2xl:text-xl">¿Dónde encontrarnos?</h1></div>
                    <a href="https://maps.app.goo.gl/1LCB9yRcbjieTN6F6" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-gray-400 hover:cursor-pointer overflow-hidden"><img src={Map} alt='Mapa señalando la dirección del local: Tajes esquina Nardone, Santa Lucía, Canelones' className="hover:scale-110 duration-200" /></a>
                    <h1 className='text-sm'>Amsterdam 194 esq. Sarandí, Santa Lucía, Canelones.</h1>
                </article>
            </div>
        </aside>
    )
}

export default Aside;
