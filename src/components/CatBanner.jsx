import Calefactor from '../assets/imagenes/beazy-wruFvA5KP_E-unsplash.jpg';
import Aire from '../assets/imagenes/aire.jpg';

const CatBanner = () => {
    return (
        <section className="mt-6 flex flex-col">
            <h1 className="text-xl font-semibold text-blue-900 m-2">¿Qué estás buscando?</h1>
            <article className="w-full h-44 bg-slate-400 relative overflow-hidden">
                <img className="object-cover" src={Calefactor} />
                <div className='w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)]'></div>
                <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Calefactores</h1>
            </article>
            <article className="w-full h-44 bg-slate-700 relative overflow-hidden">
                <img className="w-full" src={Aire} />
                <div className='w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to[rgba(0, 0, 0, 0)]'></div>
                <h1 className="absolute bottom-2 left-4 text-2xl font-bold text-white">Aires Acondicionados</h1>
            </article>
        </section>
    );
}

export default CatBanner;