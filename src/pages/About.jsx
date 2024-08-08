import Instalacion from "../assets/iconos/instalacion.png"
import Mantenimiento from "../assets/iconos/mantenimiento.png"
import Asesoramiento from "../assets/iconos/asesoramiento.png"

const About = () => {
    return (
        <main className="col-span-3 max-lg:col-span-5 px-3 divide-y divide-gray-300 pb-8 pt-3 bg-white m-3 rounded-lg">
            <section className="flex flex-col gap-4 mb-4">
                <div className="flex-col text-white py-6 px-10 sm:p-16 sm:gap-4 md:px-36 sobre-nos rounded-lg flex ">
                    <h1 className="text-3xl sm:text-[3rem] font-semibold mb-2">Sobre Nosotros</h1>
                    <p className="sm:text-lg indent-4">
                        En <span className="font-semibold">Climatización Santa Lucía</span> nos dedicamos a ofrecer soluciones integrales
                        en calefacción y aire acondicionado. Con más de quince años de experiencia
                        en el rubro nos enorgullece ser un referente de calidad y confianza.
                    </p>
                </div>
                <div className="px-4 xl:px-24 2xl:px-36">
                    <h1 className="text-3xl font-semibold mb-2">Nuestros servicios</h1>
                    <p className="indent-4">
                        Contamos con un equipo de profesionales altamente capacitados que se esfuerzan por brindar un servicio excepcional
                        adaptado a las necesidades específicas de cada cliente.
                    </p>
                    <div className="flex flex-col mt-6 gap-2">
                        <p className="font-semibold text-lg">Nuestros servicios incluyen:</p>
                        <div className="flex flex-col gap-2 2xl:gap-6">
                            <div className="flex gap-2 items-center">
                                <div className="w-10 max-sm:basis-2/5 lg:w-auto"><img src={Instalacion} alt="ícono de instalación" className="" /></div>
                                <p><span className="font-semibold">Instalación de calefactores y aires acondicionados:</span> garantizamos una instalación segura y eficiente.
                                    Utilizando los mejores materiales y tecnología disponible en el mercado.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-10 max-sm:basis-2/5 lg:w-auto"><img src={Mantenimiento} alt="ícono de mantenimiento" className="" /></div>
                                <p><span className="font-semibold">Mantenimiento y reparación:</span> ofrecemos planes de mantenimiento preventivo y servicios de reparación
                                para asegurar el correcto funcionamiento de sus sistemas de climatización.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-10 max-sm:basis-2/5 lg:w-auto"><img src={Asesoramiento} alt="ícono de asesoramiento" className="" /></div>
                                <p><span className="font-semibold">Asesoramiento personalizado:</span> nuestro equipo está disponible para asesorarle en la elección del equipo más
                                adecuado para su espacio optimizando el rendimiento y la eficiencia energética.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 xl:px-24 2xl:px-36 mt-4">
                    <h1 className="text-3xl font-semibold mb-2">Nuestra misión</h1>
                    <p className="indent-4">
                        A lo largo de nuestro recorrido profesional hemos construido una sólida reputación basada en la confiabilidad y
                        la satisfacción del cliente. Tenemos como misión proporcionar soluciones que mejoren su calidad de vida.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default About;