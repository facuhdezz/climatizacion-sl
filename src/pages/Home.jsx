import CatBanner from "../components/CatBanner";
import Destacados from "../components/Destacados";
import SobreNos from "../components/SobreNos";

const Home = () => {
    return (
        <main className="">
            <Destacados />
            <CatBanner />
            <SobreNos />
        </main>
    );
}

export default Home;