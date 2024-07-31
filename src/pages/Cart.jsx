import { Link } from "react-router-dom";
import Close from "../assets/iconos/close.svg"
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

const Cart = () => {

    // const form = useRef()
    // const [emailSend, setEmailSend] = useState(false)
    // const [emailError, setEmailError] = useState(false)

    // const serviceId = import.meta.env.VITE_APP_SERVICE_ID || "";
    // const templateProductId = import.meta.env.VITE_APP_TEMPLATE_ID_PRODUCT || "";
    // const publicId = import.meta.env.VITE_APP_PUBLIC || "";

    // const sendEmail = (e) => {

    //     e.preventDefault();

    //     emailjs
    //         .sendForm(serviceId, templateProductId, form.current, {
    //             publicKey: publicId,
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //                 setEmailSend(true);
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);                    
    //                 setEmailError(true);
    //             },
    //         );
    // }

    // useEffect(() => {
    //     if (emailSend) {
    //         setTimeout(() => {
    //             setEmailSend(false)
    //         }, 4000)
    //     } else if (emailError) {
    //         setTimeout(() => {
    //             setEmailError(false)
    //         }, 4000)
    //     }
    // }, [emailSend, emailError])

    const [subTotal, setSubTotal] = useState(0)

    const {productCart, deleteProduct} = useCart();

    const handleRemove = (id) => {
        deleteProduct(id)
    }

    useEffect(() => {
        const newSubTotal = productCart.reduce((acc, product) => acc + Number(product.precio), 0)
        setSubTotal(newSubTotal)
    }, [productCart])

    return (
        <main className="col-span-4 p-3 pt-8 bg-white m-3 rounded-lg text-center">
            <h1 className="text-3xl font-semibold">Carrito de compras</h1>
            <p className="text-2xl">Bienvenido al carrito de compras</p>
            <section className="p-6 w-full flex gap-4">
                <article className="flex basis-2/3 bg-gray-100 rounded border pt-2">
                    <table className="w-full">
                        <thead className="border-b">
                            <tr className="text-center">
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {productCart.map(product => (
                                <tr key={product.id} className="bg-white text-center">
                                    <th><Link to={"/item/" + product.id}><img src={product.url} alt={product.nombre} className="w-20" /></Link></th>
                                    <th><Link to={"/item/" + product.id}>{product.nombre}</Link></th>
                                    <th>{product.moneda} {product.precio}</th>
                                    <th>{product.moneda} {product.precio}</th>
                                    <th onClick={() => { handleRemove(product.id) }}><img src={Close} className="trash light-icons" alt="borrar elemento" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
                <article className="flex flex-col basis-1/3 bg-gray-100 rounded border pt-3 divide-y h-auto">
                    <h1 className="text-lg font-semibold">Totales del carrito</h1>
                    <div className="bg-white w-full text-left p-4">
                        <h1>Sub Total: USD {subTotal}</h1>
                    </div>
                    <div className="bg-white w-full text-left p-4 font-semibold">
                        <h1>Total: USD {subTotal}</h1>
                    </div>
                    <div className="bg-white w-full text-left p-4 flex flex-col gap-2">
                        {/* <form ref={form} className="flex flex-col gap-4 items-center mt-4 w-full" onSubmit={sendEmail}>
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="text" name="from_name" placeholder="Nombre *" required></input>
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="email" name="email_id" placeholder="E-mail *" required></input>
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="tel" name="phone_id" placeholder="Teléfono"></input>
                            <textarea className="bg-gray-100 w-full h-24 lg:h-16 p-2 border border-gray-300 rounded outline-none focus:bg-white" name="message" placeholder="Mensaje *" required></textarea>
                            <button className="bg-gray-100 hover:bg-gray-200 text-black border rounded p-1 w-full">Generar orden</button>
                            <button className="bg-green-700 hover:bg-green-900 text-white border rounded p-1 w-full">Finalizar compra</button>
                        </form> */}
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Cart;