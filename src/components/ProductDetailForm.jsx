import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ProductDetailForm = ({ producto }) => {

    const form = useRef()
    const [emailSend, setEmailSend] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID || "";
    const templateProductId = import.meta.env.VITE_APP_TEMPLATE_ID_PRODUCT || "";
    const publicId = import.meta.env.VITE_APP_PUBLIC || "";

    const sendEmail = (e) => {

        e.preventDefault();

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
        setEmailSend(true)
    }

    useEffect(() => {
        if (emailSend) {
            setTimeout(() => {
                setEmailSend(false)
            }, 42000)
        } else if (emailError) {
            setTimeout(() => {
                setEmailError(false)
            }, 42000)
        }
    }, [emailSend, emailError])

    return (
        <>
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
            <form ref={form} className="flex flex-col gap-4 items-center mt-4 w-full" onSubmit={sendEmail}>
                <h1 className="text-xl font-semibold">Consulta por este producto</h1>
                <div className="w-full">
                    <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="text" name="from_name" placeholder="Nombre *" required></input>
                </div>
                <div className="w-full">
                    <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="email" name="email_id" placeholder="E-mail *" required></input>
                </div>
                <div className="w-full">
                    <input className="bg-gray-100 w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-white" type="tel" name="phone_id" placeholder="Teléfono"></input>
                </div>
                <div className="w-full">
                    <textarea className="bg-gray-100 w-full h-24 lg:h-36 p-2 border border-gray-300 rounded outline-none focus:bg-white" name="message" placeholder="Mensaje *" required></textarea>
                </div>
                <input type="hidden" name="product" value={producto.descripcion} />
                <button className="border border-gray-300 rounded px-4 hover:bg-white duration-200">Enviar</button>
            </form>
        </>
    )
}

export default ProductDetailForm;