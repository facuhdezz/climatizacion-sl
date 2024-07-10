import Logo from '../assets/logos/logofooter2.png';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white p-4 items-center gap-6 col-span-5">
            <div className="w-full flex md:flex-row flex-col mx-auto md:w-[70%] gap-6 md:gap-20">
                <form className="flex flex-col gap-4 items-center mt-4 w-full">
                    <h1 className="text-xl font-semibold">Realiza una consulta</h1>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="text" name="nombre" placeholder="Nombre" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="tel" name="telefono" placeholder="Teléfono" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="email" name="email" placeholder="E-mail" required></input>
                    </div>
                    <div className="w-full">
                        <textarea className="bg-transparent w-full h-16 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" name="mensaje" placeholder="Mensaje" required></textarea>
                    </div>
                    <button className="border-b border-gray-400 rounded px-4">Enviar</button>
                </form>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <img className="md:w-[500px]" src={Logo} />
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-2xl font-semibold">Contacto</h1>
                        <p>Teléfono: 092 707 135</p>
                        <p>Tajes esq. Nardone, Santa Lucía, Canelones</p>
                        <div className='flex items-center gap-2'>
                            <img className='h-[24px]' src={Wpp} />
                            <img className='h-[24px]' src={Ig} />
                            <img className='h-[24px]' src={Fb} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;