import TopImg from "../assets/loading/logo-top.svg"
import BottomImg from "../assets/loading/logo-bottom.svg"

const Spinner = () => {
    return (
        <article className="m-auto flex items-center justify-center">
            <div className="relative w-20 h-20">
                <img className="absolute spinnerTop" src={TopImg} alt="icono de llama" />
                <img className="absolute translate-y-14" src={BottomImg} alt="icono de copo de nieve" />
            </div>
        </article>
    )
}

export default Spinner;