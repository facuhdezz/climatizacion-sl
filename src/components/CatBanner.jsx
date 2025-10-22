import Calefactor from '../assets/imagenes/calefactor.webp';
import Aire from '../assets/imagenes/aire-2nuevo.webp';
import { Link } from 'react-router-dom';

const CatBanner = () => {
    return (
        <section className="mt-6 lg:mt-10">
            <h1 className="text-xl font-semibold text-blue-900 m-2 lg:text-3xl">¿Qué estás buscando?</h1>
            <div className="flex flex-col sm:flex-row gap-1 md:gap-2">
                <Link to={"/calefactores"} className="w-full h-auto aspect-[2/1] bg-slate-400 relative overflow-hidden rounded-xl"><article>
                    <img className="" alt='Calefactor' src={Calefactor} />
                    <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)] hover:bg-[rgba(0,0,0,0.8)] duration-200'></div>
                    <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Calefactores</h1>
                </article></Link>
                <Link to={"/aires"} className="w-full h-auto aspect-[2/1] bg-slate-700 relative overflow-hidden rounded-xl"><article>
                    <img className="" src={Aire} alt='Aire acondicionado' />
                    <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)] hover:bg-[rgba(0,0,0,0.8)] duration-200'></div>
                    <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Aires Acondicionados</h1>
                </article></Link>
            </div>
        </section>
    );
}

export default CatBanner;
