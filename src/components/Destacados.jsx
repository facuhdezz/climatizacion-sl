import destacados from '../assets/products/destacados';
import DestCard from './DestCard';

const Destacados = () => {
    return (
        <section className='p-3 flex flex-col gap-4'>
            <div>
                <h1 className='text-xl font-semibold'>Productos destacados</h1>
                <h2 className='text-sm font-semibold text-blue-800'>¡Los más vendidos!</h2>
            </div>            
            <div className='flex gap-2 overflow-x-scroll'>{destacados.map(item => (
                <DestCard url={item.url} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
            ))}
            </div>
        </section>
    );
}

export default Destacados;