import Pellet from "../assets/imagenes/pellet.webp";
import Lena from "../assets/imagenes/leña.webp";
import Aire from "../assets/imagenes/aire-ac.webp";
import Ambos from "../assets/imagenes/pellet-leña.webp";
import { useEffect, useState } from "react";

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

export const TextCat = ({cat, subCat}) => {

    const [Photo, setPhoto] = useState(null);
    const [title, setTitle] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    useEffect(() => {
        if (cat == "calefactores" && subCat == "") {
            setPhoto(Ambos);
            setTitle("Beneficios del uso de calefactores")
            setText1("Optar por calefactores de alto rendimiento a pellets y leña no solo mejora la eficiencia energética del hogar, sino que también contribuye a un futuro más sostenible.")
            setText2("Ambos tipos de calefactores ofrecen beneficios significativos en términos de eficiencia, costo y reducción de emisiones, haciendo de ellos una excelente opción para quienes buscan una climatización efectiva y ecológica.")
        } else if (subCat == "pellet") {
            setPhoto(Pellet);
            setTitle("Calefactores a Pellet")
            setText1("Los calefactores a pellets destacan por su alta eficiencia y bajo nivel de emisiones. Los pellets, hechos de residuos de madera comprimida, son una fuente de energía renovable y sostenible.")
            setText2("Los calefactores a pellets modernos pueden alcanzar eficiencias de hasta el 90%, convirtiendo la mayor parte del combustible en calor útil.")
        } else if (subCat == "leña") {
            setPhoto(Lena);
            setTitle("Calefactores a Leña")
            setText1("Los calefactores a leña de alto rendimiento también son una opción eficiente para la climatización del hogar. La leña es un recurso natural que,cuando se maneja de manera sostenible, puede ser una fuente de energía renovable.")
            setText2("Los modernos calefactores a leña están diseñados para maximizar la combustión y minimizar las emisiones, alcanzando eficiencias de hasta el 80%.")
        } else if (cat == "aires") {
            setPhoto(Aire);
            setTitle("Aires Acondicionados");
            setText1("Climatizar los espacios con aires acondicionados no solo proporciona confort térmico, sino que también ofrece una serie de beneficios que van más allá de la mera regulación de la temperatura.");
            setText2("La integración de sistemas de aire acondicionado eficientes energéticamente se ha convertido en una prioridad para muchos hogares y empresas, debido a sus múltiples ventajas.");
        }
    }, [cat, subCat])

    return (
        <article className="flex flex-col max-sm:items-center sm:flex-row gap-4 pt-4">
            <div className="flex items-center flex-none">
                <img className="max-sm:w-full max-2xl:max-w-xs 2xl:w-[500px] h-auto rounded-lg" src={Photo} alt={title} />
            </div>
            <div className="flex-1">
                <h1 className="font-semibold text-xl mb-2 text-blue-800">{title}</h1>
                <p className="max-sm:text-[0.95rem] max-md:text-sm">
                    {text1}
                </p>
                <p className="max-sm:text-[0.95rem] max-md:text-sm mt-2">
                    {text2}
                </p>
            </div>
        </article>
    )
}