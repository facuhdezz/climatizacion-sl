import Logo from '../assets/logos/logofooter2.png';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
    const form = useRef();
    const [emailSend, setEmailSend] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID || "";
    const publicId = import.meta.env.VITE_APP_PUBLIC || "";

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, {
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

    return (
        <footer className="bg-gray-950 text-white p-4 items-center gap-6 col-span-5 pb-10">
            <div className="w-full flex md:flex-row flex-col mx-auto md:w-[70%] xl:w-[50%] gap-6 md:gap-20">
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
                <form ref={form} className="flex flex-col gap-4 items-center mt-4 w-full max-md:w-[80%] mx-auto" onSubmit={sendEmail}>
                    <h1 className="text-xl font-semibold">Realiza una consulta</h1>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="text" name="from_name" placeholder="Nombre *" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="email" name="email_id" placeholder="E-mail *" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="tel" name="phone_id" placeholder="Teléfono"></input>
                    </div>
                    <div className="w-full">
                        <textarea className="bg-transparent w-full h-16 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" name="message" placeholder="Mensaje *" required></textarea>
                    </div>
                    <button type='submit' className="border-b border-gray-400 rounded px-4 hover:bg-gray-900 duration-200">Enviar</button>
                </form>
                <div className='flex flex-col justify-around items-center gap-6'>
                    <img className="md:w-[500px]" src={Logo} alt='Logo de Climatización Santa Lucía: fuego con copo de nieve debajo' />
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-2xl font-semibold">Contacto</h1>
                        <a href="https://wa.me/59898437511" target="_blank" rel="noopener noreferrer"><p className="hover:text-gray-400">Teléfono: <span className="font-semibold">098 437 511</span></p></a>
                        <a href="https://maps.app.goo.gl/38BwenRWHDBP9tkz7" target="_blank" rel="noopener noreferrer"><p className="hover:text-gray-400">Amsterdam 194 esq. Sarandí, Santa Lucía, Canelones</p></a>
                        <div className='flex items-center gap-2'>
                            <a href="https://wa.me/59898437511" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Wpp} alt='Ícono de WhatsApp' /></a>
                            <a href="https://www.instagram.com/climatizacion_santa_lucia/" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Ig} alt='Ícono de Instagram' /></a>
                            <a href="https://www.facebook.com/profile.php?id=61560347577671" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Fb} alt='Ícono de Facebook' /></a>
                        </div>
                        <div className="text-xs text-center text-gray-300">
                            <p>© 2024 Climatización Santa Lucía</p>
                            <a href="https://www.instagram.com/border.visual/" target="_blank" rel="noopener noreferrer"><p className="hover:text-white duration-200">Diseño web por BORDER</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
