import Logo from '../assets/logos/logofooter2.png';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white p-4 flex flex-col items-center gap-6">
            <div className="w-full">
                <form className="flex flex-col gap-4 items-center">
                    <h1 className="text-xl font-semibold">Consúltenos</h1>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="text" name="nombre" placeholder="Nombre" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="number" name="telefono" placeholder="Teléfono" required></input>
                    </div>
                    <div className="w-full">
                        <input className="bg-transparent w-full h-8 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" type="email" name="email" placeholder="E-mail" required></input>
                    </div>
                    <div className="w-full">
                        <textarea className="bg-transparent w-full h-16 p-2 border-b border-gray-700 rounded outline-none focus:bg-white/5" name="mensaje" placeholder="Relice su consulta" required></textarea>
                    </div>
                    <button className="border-b border-gray-400 rounded px-4">Enviar</button>
                </form>
            </div>
            <img className="w-[90%]" src={Logo} />
        </footer>
    );
}

export default Footer;