const SobreNos = () => {
    return (
        <section className="flex flex-col gap-3 p-3 my-4 lg:my-8">
            <h1 className="text-3xl lg:text-[2.5rem]">El confort ideal.</h1>
            <div className="flex gap-2">
                <div>
                    <h1 className="text-lg font-semibold text-blue-800 lg:text-2xl">Descubra el sistema de calefacción más conveniente para su hogar, casa o apartamento.</h1>
                    <p className="max-lg:hidden text-lg">El sistema conformado por un calefactor a pellet que cumpla con la normativa europea EN14785:2006 y pellets de madera certificados clase EN Plus A1 es uno de los sistema más eficientes del mercado y de menor costo operativo.
                    Los calefactores a pellet son equipos diseñados especialmente para la combustión óptima de los pellets de madera, aprovechando todo su poder calorífico. </p>
                </div>
                <img className="w-28 h-auto lg:w-36" src='https://www.vivionhaus.com/uploads/cp_d96bddfb26821be262a5b65ba6082c8d.png' />
            </div>
        </section>
    );
}

export default SobreNos;