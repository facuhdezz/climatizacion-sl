import CatBanner from "../components/CatBanner";
import Destacados from "../components/Destacados";
import SobreNos from "../components/SobreNos";
import Wpp from "../assets/iconos/wpp.png"

const Home = () => {
    return (
        <main className="col-span-3 max-lg:col-span-5 px-3">
            <Destacados />
            <CatBanner />
            <article className="sticky bottom-3">
                <a href="https://wa.me/59899707135" target="_blank" rel="noopener noreferrer" className="flex justify-center gap-2 p-2 my-3 items-center bg-green-800 rounded-xl border-2 hover:cursor-pointer hover:bg-green-700 duration-200">
                    <img src={Wpp} alt="Ícono de WhatsApp" className="w-8"/>
                    <h1 className="text-white font-bold">Escribinos</h1>
                </a>
            </article>
            <SobreNos />
        </main>
    );
}

export default Home;