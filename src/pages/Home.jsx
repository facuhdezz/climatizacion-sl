import CatBanner from "../components/CatBanner";
import Destacados from "../components/Destacados";

const Home = () => {
    return (
        <main className="pt-32">
            <Destacados />
            <CatBanner />
        </main>
    );
}

export default Home;