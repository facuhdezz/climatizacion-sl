import Logo from '../assets/logos/logofooter2.png';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white p-4 items-center gap-6 col-span-5 pb-10">
            <div className="w-full flex md:flex-row flex-col mx-auto md:w-[70%] gap-6 md:gap-20">
                <form className="flex flex-col gap-4 items-center mt-4 w-full">
                    <h1 className="text-xl font-semibold">Realiza una consulta</h1>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="text" name="nombre" placeholder="Nombre *" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="email" name="email" placeholder="E-mail *" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="tel" name="telefono" placeholder="Teléfono" required></input>
                    </div>
                    <div className="w-full">
                        <textarea className="bg-transparent w-full h-16 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" name="mensaje" placeholder="Mensaje *" required></textarea>
                    </div>
                    <button className="border-b border-gray-400 rounded px-4 hover:bg-gray-900 duration-200">Enviar</button>
                </form>
                <div className='flex flex-col justify-around items-center gap-6'>
                    <img className="md:w-[500px]" src={Logo} alt='Logo de Climatización Santa Lucía: fuego con copo de nieve debajo' />
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-2xl font-semibold">Contacto</h1>
                        <a href="https://wa.me/59899707135" target="_blank" rel="noopener noreferrer"><p className="hover:text-gray-400">Teléfono: <span className="font-semibold">092 707 135</span></p></a>
                        <a href="https://maps.app.goo.gl/38BwenRWHDBP9tkz7" target="_blank"><p className="hover:text-gray-400">Tajes esq. Nardone, Santa Lucía, Canelones</p></a>
                        <div className='flex items-center gap-2'>
                            <img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Wpp} alt='Ícono de WhatsApp' />
                            <img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Ig} alt='Ícono de Instagram' />
                            <img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Fb} alt='Ícono de Facebook' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;