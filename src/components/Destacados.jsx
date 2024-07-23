import destacados from '../assets/products/destacados';
import productos from '../assets/products/productos';
import DestCard from './DestCard';

const Destacados = () => {

    const filteredProducts = () => {
        return productos.filter(productos => productos.destacado)
    } 

    const productosFiltrados = filteredProducts();

    return (
        <section className='py-3 flex flex-col gap-4'>
            <div>
                <h1 className='text-xl font-semibold lg:text-3xl'>Productos destacados</h1>
                <h2 className='text-sm font-semibold text-blue-800 lg:text-xl'>¡Los más vendidos!</h2>
            </div>            
            <div className='flex gap-2 overflow-x-scroll'>{productosFiltrados.map(item => (
                <DestCard key={item.idx+1000} clase={"w-36"} url={item.url} idx={item.idx} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
            ))}
            </div>
        </section>
    );
}

export default Destacados;