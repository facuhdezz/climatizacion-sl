const SobreNos = () => {
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

export default SobreNos;