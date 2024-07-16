import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ProductDetailForm = ({ producto }) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID_PRODUCT, form.current, {
                publicKey: process.env.PUBLIC,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Mensaje enviado correctamente")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Error! Vuelva a intentarlo más tarde")
                },
            );
    }

    return (
        <form ref={form} className="flex flex-col gap-4 items-center mt-4 w-full" onSubmit={sendEmail}>
            <h1 className="text-xl font-semibold">Consulta por este producto</h1>
            <div className="w-full">
                <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="text" name="from_name" placeholder="Nombre *" required></input>
            </div>
            <div className="w-full">
                <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="email" name="email_id" placeholder="E-mail *" required></input>
            </div>
            <div className="w-full">
                <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="tel" name="phone_id" placeholder="Teléfono" required></input>
            </div>
            <div className="w-full">
                <textarea className="bg-gray-100 w-full h-24 lg:h-36 p-2 border border-gray-300 rounded outline-none focus:bg-white" name="message" placeholder="Mensaje *" required></textarea>
            </div>
            <input type="hidden" name="product" value={producto.descripcion} />
            <button className="border border-gray-300 rounded px-4 hover:bg-white duration-200">Enviar</button>
        </form>
    )
}

export default ProductDetailForm;