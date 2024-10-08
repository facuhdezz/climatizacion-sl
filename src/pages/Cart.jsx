import { Link } from "react-router-dom";
import Close from "../assets/iconos/close.svg"
import { useCart } from "../context/CartContext";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import Medio1 from '../assets/imagenes/pagos/1.jpg';
import Medio2 from '../assets/imagenes/pagos/2.jpg';
import Medio3 from '../assets/imagenes/pagos/3.jpg';

const Cart = () => {

    const form = useRef()
    const [emailSend, setEmailSend] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID || "";
    const templateProductId = import.meta.env.VITE_APP_TEMPLATE_ID_PRODUCT || "";
    const publicId = import.meta.env.VITE_APP_PUBLIC || "";

    const sendEmail = () => {

        emailjs
            .sendForm(serviceId, templateProductId, form.current, {
                publicKey: publicId,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmailSend(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setEmailError(true);
                },
            );
    }

    useEffect(() => {
        if (emailSend) {
            setTimeout(() => {
                setEmailSend(false)
            }, 4000)
        } else if (emailError) {
            setTimeout(() => {
                setEmailError(false)
            }, 4000)
        }
    }, [emailSend, emailError])
    const [emailOrder, setEmailOrder] = useState("")

    const [subTotal, setSubTotal] = useState(0)

    const { productCart, deleteProduct } = useCart();

    const handleRemove = (id) => {
        deleteProduct(id)
    }

    const dptos = ["ARTIGAS", "CANELONES", "CERRO LARGO", "COLONIA", "DURAZNO", "FLORES", "FLORIDA", "LAVALLEJA", "MALDONADO", "MONTEVIDEO", "PAYSANDU", "RIO NEGRO", "RIVERA", "ROCHA", "SALTO", "SAN JOSE", "SORIANO", "TACUAREMBO", "TREINTA Y TRES"]

    const [selectDpto, setSelectDpto] = useState("");
    const [selectLoc, setSelectLoc] = useState("");

    const [localidades, setLocalidades] = useState("");

    const handleChangeDpto = (e) => {
        setSelectDpto(e.target.value)
    }

    const handleChangeLoc = (e) => {
        setSelectLoc(e.target.value)
    }

    useEffect(() => {
        const fetchLoc = async (formatedDpto) => {
            try {
                const response = await fetch(`https://direcciones.ide.uy/api/v0/geocode/localidades?departamento=${formatedDpto}`)
                const data = await response.json()
                console.log(typeof(data));
                console.log(data);
                setLocalidades(data);               
            } catch(error) {
                console.log(error);                
            }
        }

        if(selectDpto) {
            const formatedDpto = selectDpto.toLocaleLowerCase().replace(" ", "%20")
            fetchLoc(formatedDpto);
        }

    }, [selectDpto])

    const textoBase = "Orden generada desde el carrito de compras por el/los siguientes productos: "

    useEffect(() => {
        const newSubTotal = productCart.reduce((acc, product) => acc + Number(product.precio) * product.cantidad, 0)
        setSubTotal(newSubTotal)
        const ids = productCart.map(product => ({id: product.id, cantidad: product.cantidad}))
        setIdProducts(ids)
        const products = productCart.map(product => `ID: ${product.id}, Precio: ${product.precio}, Descripción: ${product.descripcion}`).join("; ")
        setEmailOrder(textoBase + products)
    }, [productCart])

    const [idProducts, setIdProducts] = useState(() => {
        const storedProductCart = localStorage.getItem('productCart');
        return storedProductCart ? JSON.parse(storedProductCart).map(product => ({
            id: product.id,
            cantidad: product.cantidad
        })) : [];
    });

    const [order, setOrder] = useState({
        products: idProducts,
        from_name: "",
        email_id: "",
        phone_id: "",
        message: ""
    });

    useEffect(() => {
        setOrder(prevOrder => ({
            ...prevOrder,
            products: idProducts
        }));
    }, [idProducts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
        
    };

    const setOrderToDb = async () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        try {
            console.log("Sending order:", order);
            await addDoc(ordersCollection, {...order, createdAt: Timestamp.now()})
            console.log("Orden Generada Correctamente!");
        } catch(error) {
            console.error("Error al generar la orden: ", error);
        }        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await setOrderToDb();    
            sendEmail();        
        } catch(error) {
            console.error("Error al ejecutar las funciones", error);            
        }
    }

    return (
        <main className="col-span-4 max-lg:col-span-5 p-3 pt-8 bg-white m-3 rounded-lg text-center">
            <h1 className="text-3xl font-semibold">Carrito de compras</h1>
            {/* <p className="text-2xl">Bienvenido al carrito de compras</p> */}
            <section className="p-1 sm:p-6 w-full xl:w-[50dvw] mx-auto flex flex-col gap-4 text-sm sm:text-base">
                <article className="flex flex-col bg-gray-100 rounded border pt-2">
                    <table className="w-full">
                        <thead className="border-b">
                            <tr className="text-center">
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-xs sm:text-base">
                            {productCart.map(product => (
                                <tr key={product.id} className="bg-white text-center">
                                    <th><Link to={"/product/" + product.id}><img src={product.url} alt={product.nombre} className="w-20 mx-auto" /></Link></th>
                                    <th><Link to={"/product/" + product.id}>{product.nombre}</Link></th>
                                    <th>{product.moneda} {product.precio}</th>
                                    <th>{product.cantidad}</th>
                                    <th>{product.moneda} {product.cantidad * product.precio}</th>
                                    <th onClick={() => { handleRemove(product.id) }}><img src={Close} className="hover:cursor-pointer hover:scale-105" alt="borrar elemento" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {Object.keys(productCart).length == 0 && <div className="p-6"><p className="font-semibold">No hay productos en el carrito</p></div>}
                </article>
                <article className="flex flex-col bg-gray-100 rounded border pt-3 divide-y h-auto">
                    <h1 className="text-lg font-semibold">Totales del carrito</h1>
                    <div className="bg-white w-full text-left p-4">
                        <h1>Sub Total: USD {subTotal}</h1>
                    </div>
                    <div className="bg-white w-full text-left p-4 font-semibold">
                        <h1>Total: USD {subTotal}</h1>
                    </div>
                    <div className="bg-white w-full text-left py-4 px-20">
                        <h1>En caso de requerir envío los costos <span className="font-semibold">no están incluídos</span> en el total del pedido, nos pondremos en contacto con usted para coordinar el mismo.</h1>
                    </div>
                    <div className="bg-white w-full text-left p-4 flex flex-col gap-2">
                        {emailSend && <div className="max-lg:w-full fixed top-24">
                            <div className="p-10 lg:p-20 bg-[rgba(255, 255, 255, 1)] backdrop-blur-sm rounded-xl mx-auto">
                                <div className="bg-green-600 border-2 border-green-800 rounded-xl p-4 text-center">
                                    <h1 className="text-white text-xl lg:text-2xl 2xl:text-[2.5rem] font-bold">¡Mensaje enviado correctamente!</h1>
                                    <h2 className="text-white text-sm lg:text-base 2xl:text-xl">Gracias por comunicarse con Climatización Santa Lucía.</h2>
                                </div>
                            </div>
                        </div>}
                        {emailError && <div className="max-lg:w-full fixed top-24">
                            <div className="p-10 lg:p-20 bg-[rgba(255, 255, 255, 1)] backdrop-blur-sm rounded-xl mx-auto">
                                <div className="bg-red-600 border-2 border-red-800 rounded-xl p-4 text-center">
                                    <h1 className="text-white text-xl lg:text-2xl 2xl:text-[2.5rem] font-bold">Error al enviar mensaje.</h1>
                                    <h2 className="text-white text-sm lg:text-base 2xl:text-xl">Por favor vuelva a intentar más tarde.</h2>
                                </div>
                            </div>
                        </div>}
                        <form ref={form} className="flex flex-col gap-4 items-center w-full" onSubmit={handleSubmit}>
                            <h1 className="text-2xl">Detalles de Facturación</h1>
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="text" name="from_name" value={order.from_name} onChange={handleChange} placeholder="Nombre *" required></input>
                            {/* <div className="flex w-full gap-2">
                                <select required onChange={handleChangeDpto} id="dpto" name="dpto" className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white">
                                    <option value="">
                                        Seleccione un departamento *
                                    </option>
                                    {dptos.map(dp => (<option>{dp}</option>))}
                                </select>
                                <select required onChange={handleChangeLoc} id="loc" name="loc" className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white">
                                    <option value="">
                                        Seleccione una localidad *
                                    </option>
                                    {localidades && localidades.map(loc => (<option>{loc.nombre}</option>))}
                                </select>
                            </div> */}
                            {/* <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" placeholder="Dirección *" required></input> */}
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="email" name="email_id" value={order.email_id} onChange={handleChange} placeholder="E-mail *" required></input>
                            <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="tel" name="phone_id" value={order.phone_id} onChange={handleChange} placeholder="Teléfono *" required></input>
                            <textarea className="bg-gray-100 w-full h-24 lg:h-16 p-2 border border-gray-300 rounded outline-none focus:bg-white" name="message" value={order.message} onChange={handleChange} placeholder="Mensaje (opcional)"></textarea>
                            <input type="hidden" name="product" value={emailOrder} />
                            <div className="w-full text-center">
                                <div className="text-2xl font-semibold rounded p-4">
                                    <h1>Medios de pago disponibles:</h1>
                                </div>
                                <div className="rounded border p-2">
                                    <p>Pagá de forma presencial con tarjeta o efectivo.</p>
                                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                        <div className="basis-1/3">
                                            <img className="rounded-lg shadow-lg" src={Medio1} alt="Medios de pago disponibles"/>
                                        </div>
                                        <div className="basis-1/3">
                                            <img className="rounded-lg shadow-lg" src={Medio2} alt="Medios de pago disponibles"/>
                                        </div>
                                        <div className="basis-1/3">
                                            <img className="rounded-lg shadow-lg" src={Medio3} alt="Medios de pago disponibles"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-full text-left p-2">
                                <p><span className="font-bold">Estimado cliente</span>, para poder coordinar la compra, por favor seleccione <span className="font-bold">realizar pedido</span> y nos comunicaremos con usted a la brevedad.</p>
                                {/* <p><span className="font-bold">Estimado cliente</span>, si desea coordinar la compra directamente con nosotros, por favor seleccione <span className="font-bold">generar orden</span> y nos comunicaremos con usted a la brevedad. De lo contrario puede continuar con la compra en línea seleccionando la opción de <span className="font-bold">finalizar compra.</span></p> */}
                            </div>
                            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold rounded-md p-1 w-full">Realizar Pedido</button>
                            {/* <button className="bg-green-700 hover:bg-green-900 text-white border rounded p-1 w-full">Finalizar compra</button> */}
                        </form>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Cart;