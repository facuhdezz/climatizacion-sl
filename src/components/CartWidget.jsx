import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import Close from "../assets/iconos/close.svg"

const CartWidget = () => {

    const {productCart, clearCart, deleteProduct} = useCart();

    const handleClear = () => {
        clearCart();
    }

    const handleRemove = (id) => {
        deleteProduct(id)
    }

    return (
        <section className="col-span-1 max-lg:hidden">
            <div className="bg-white my-3 mr-3 rounded-lg pb-1">
                <h1 className="text-xl font-semibold p-3 border-b">Carrito de compras</h1>
                {productCart.length > 0 ? productCart.map(product => (
                    <div className="flex relative gap-5 h-28 p-4 bg-white border-b">
                        <img src={Close} className="absolute top-2 right-2 hover:cursor-pointer hover:scale-105" onClick={() => {handleRemove(product.id)}} />
                        <img src={product.url} alt={product.nombre} />
                        <div className="flex flex-col overflow-hidden">
                            <p>{product.moneda} <span className="font-semibold">{product.precio}</span></p>
                            <Link to={"/product/" + product.id} className="hover:cursor-pointer" ><p className="hover:text-gray-600 text-ellipsis">{product.descripcion}</p></Link>
                        </div>
                    </div>
                )) : <p className="bg-white text-center p-4 border-b">No hay productos en el carrito</p>}
                <div className="m-3 flex flex-col gap-2">
                    <Link to={"/carrito"}><button className="bg-gray-50 hover:bg-gray-200 border rounded p-1 w-full">Ir al carrito</button></Link>
                    <button onClick={handleClear} className="bg-red-700 hover:bg-red-900 text-white border rounded p-1 w-full">Limpiar carrito</button>
                </div>
            </div>
        </section>
    )
}

export default CartWidget;