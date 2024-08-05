import Pellet from "../assets/imagenes/pellet.webp";
import Lena from "../assets/imagenes/leña.webp";
import Ambos from "../assets/imagenes/pellet-leña.webp";

export const TextHome = () => {
    return (
        <section className="flex flex-col gap-3 p-3 my-4 lg:my-8">
            <h1 className="text-3xl lg:text-[2.5rem]">El confort ideal.</h1>
            <div className="flex gap-2">
                <div>
                    <h1 className="text-lg font-semibold text-blue-800 lg:text-2xl">Descubra el sistema de calefacción más conveniente para su hogar, casa o apartamento.</h1>
                    <p className="max-sm:hidden text-sm lg:text-lg">La eficiencia energética en la climatización del hogar es un factor crucial para reducir costos y minimizar el impacto ambiental.
                        Los calefactores de alto rendimiento a pellets y leña se han convertido en opciones populares debido a su capacidad para proporcionar un calor constante y eficiente, mientras utilizan recursos renovables.
                    </p>
                </div>
                <img className="w-28 h-auto lg:w-36 object-contain" src='https://www.vivionhaus.com/uploads/cp_d96bddfb26821be262a5b65ba6082c8d.png' alt='Imagen ilustrativa de calefactor' />
            </div>
        </section>
    );
}

export const TextPellet = () => {
    return (
        <article className="flex flex-col max-xl:items-center xl:flex-row gap-4 pt-4">
            <img className="w-full sm:w-[50%] lg:w-96 rounded-lg" src={Pellet} alt="calefactor a pellet" />
            <div>
                <h1 className="font-semibold text-xl mb-2 md:mx-[15%] xl:mx-0 text-blue-800">Calefactores a Pellet</h1>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0">
                    Los calefactores a pellets destacan por su alta eficiencia y bajo nivel de emisiones.
                    Los pellets, hechos de residuos de madera comprimida, son una fuente de energía renovable y sostenible.
                </p>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0 mt-2">
                    Los calefactores a pellets modernos pueden alcanzar eficiencias de hasta el 90%, convirtiendo la mayor parte del combustible en calor útil.
                </p>
            </div>
        </article>
    )
}

export const TextLena = () => {
    return (
        <article className="flex flex-col max-xl:items-center xl:flex-row gap-4 pt-4">
            <img className="w-full sm:w-[50%] lg:w-96 rounded-lg" src={Lena} alt="calefactor a leña" />
            <div>
                <h1 className="font-semibold text-xl mb-2 md:mx-[15%] xl:mx-0 text-blue-800">Calefactores a Leña</h1>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0">
                    Los calefactores a leña de alto rendimiento también son una opción eficiente para la climatización del hogar.
                    La leña es un recurso natural que,cuando se maneja de manera sostenible, puede ser una fuente de energía renovable.
                </p>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0 mt-2">
                    Los modernos calefactores a leña están diseñados para maximizar la combustión y minimizar las emisiones, alcanzando eficiencias de hasta el 80%.
                </p>
            </div>
        </article>
    )
}

export const TextCalefactores = () => {
    return (
        <article className="flex flex-col max-xl:items-center xl:flex-row gap-4 pt-4">
            <img className="w-full sm:w-[50%] lg:w-96 rounded-lg" src={Ambos} alt="calefactor a leña y calefactor a pellet" />
            <div>
                <h1 className="font-semibold text-xl mb-2 md:mx-[15%] xl:mx-0 text-blue-800">Beneficios del uso de calefactores</h1>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0">
                Optar por calefactores de alto rendimiento a pellets y leña no solo mejora la eficiencia energética del hogar,
                sino que también contribuye a un futuro más sostenible.
                </p>
                <p className="max-sm:text-[0.95rem] md:mx-[15%] xl:mx-0 mt-2">
                Ambos tipos de calefactores ofrecen beneficios significativos en términos de eficiencia, costo y reducción de emisiones, haciendo de ellos una excelente opción
                para quienes buscan una climatización efectiva y ecológica.
                </p>
            </div>
        </article>
    )
}