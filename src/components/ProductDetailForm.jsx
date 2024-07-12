const ProductDetailForm = ({ product }) => {
    return (
        <form className="flex flex-col gap-4 items-center mt-4 w-full">
            <h1 className="text-xl font-semibold">Consulta por este producto</h1>
            <div className="w-full">
                <input className="bg-transparent w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-gray-100" type="text" name="nombre" placeholder="Nombre *" required></input>
            </div>
            <div className="w-full">
                <input className="bg-transparent w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-gray-100" type="email" name="email" placeholder="E-mail *" required></input>
            </div>
            <div className="w-full">
                <input className="bg-transparent w-full h-8 p-2 border border-gray-300 rounded outline-none focus:bg-gray-100" type="tel" name="telefono" placeholder="Teléfono" required></input>
            </div>
            <div className="w-full">
                <textarea className="bg-transparent w-full h-16 p-2 border border-gray-300 rounded outline-none focus:bg-white/5" name="mensaje" placeholder="Mensaje *" required></textarea>
            </div>
            <button className="border border-gray-300 rounded px-4 hover:bg-white duration-200">Enviar</button>
        </form>
    )
}

export default ProductDetailForm;