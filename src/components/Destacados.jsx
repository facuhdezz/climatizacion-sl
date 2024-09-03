import DestCard from './DestCard';
import { useProducts } from '../context/ProductsContext';
import Spinner from './Spinner';

const Destacados = () => {

    const {productList, loading} = useProducts();

    // Agregando productos a firestore databse
    // useEffect(() => {
    //     const db = getFirestore();
    //     const productsCollection = collection (db, "products")
        
    //     productos.forEach(product => {
    //         addDoc(productsCollection, product)
    //     });

    //     console.log("productos agregados correctamente");
    // }, [])

    // useEffect(() => {
    //     const db = getFirestore();
    //     const q = query(collection(db, "products"), where("destacado", "==", true))

    //     getDocs(q).then(result => {
    //         setProductList(result.docs.map(product => ({id: product.id, ...product.data()})))
    //     }, []);
    // }, []);

    const filteredProducts = () => {
        return productList.filter(productos => productos.destacado)
    } 

    const productosFiltrados = filteredProducts();

    return (
        <section className='py-3 flex flex-col gap-4'>
            <div className="px-2 pt-2">
                <h1 className='text-2xl font-semibold lg:text-3xl 2xl:text-[2.2rem]'>Productos destacados</h1>
                <h2 className='text-base font-semibold text-blue-800 lg:text-xl'>¡Los más vendidos!</h2>
            </div>            
            <div className={`flex gap-2 overflow-x-scroll pb-3 h-[333px] w-full ${loading && "border rounded bg-gray-50"}`}>                
                {loading ? <Spinner /> : productosFiltrados.map(item => (
                <DestCard key={item.id} conditional={true} clase={"w-36"} url={item.url} id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} moneda={item.moneda} />
            ))}
            </div>
        </section>
    );
}

export default Destacados;