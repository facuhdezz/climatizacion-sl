import Calefactor from '../assets/imagenes/calefactor.webp';
import Aire from '../assets/imagenes/aire.jpg';
import { Link } from 'react-router-dom';

const CatBanner = () => {
    return (
        <section className="mt-6 lg:mt-10">
            <h1 className="text-xl font-semibold text-blue-900 m-2 lg:text-3xl">¿Qué estás buscando?</h1>
            <div className="flex flex-col lg:flex-row lg:gap-2">
                <Link to={"/calefactores"} className="w-full h-44 bg-slate-400 relative overflow-hidden"><article>
                    <img className="object-cover" alt='Calefactor' src={Calefactor} />
                    <div className='w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)]'></div>
                    <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Calefactores</h1>
                </article></Link>
                <Link to={"/aires"} className="w-full h-44 bg-slate-700 relative overflow-hidden"><article>
                    <img className="object-cover w-full" src={Aire} alt='Aire acondicionado' />
                    <div className='w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)]'></div>
                    <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Aires Acondicionados</h1>
                </article></Link>
            </div>
        </section>
    );
}

export default CatBanner;