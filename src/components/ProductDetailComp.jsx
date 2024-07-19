const ProductDetailComp = ({ product }) => {
    return (
        <article className="flex max-sm:flex-col gap-2 md:gap-4">
            <article className="flex justify-center mx-auto w-full sm:flex-row-reverse gap-1 divide-x-2 basis-1/2">
                <div className="contenedor-1 basis-3/4 overflow-hidden border border-gray-300 rounded-md aspect-square">
                    <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer mx-auto object-contain w-full h-full" />
                </div>
                <div className="contenedor-2 flex flex-col float-start basis-1/4 gap-1">
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md aspect-square">
                        <img src={product.url} alt={product.descripcion} className="hover:scale-105 duration-200 hover:cursor-pointer object-contain w-full h-full" />
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-1 basis-1/2">
                <h3 className="text-gray-600 sm:text-lg">{product.nombre}</h3>
                <h1 className="font-semibold text-xl sm:text-3xl leading-tight">{product.descripcion}</h1>
                <h4 className="text-lg sm:text-2xl">{product.moneda} <span className="font-bold">{product.precio}</span></h4>
                <p className="text-sm sm:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos aut consectetur, officiis mollitia labore laudantium repudiandae rerum sit distinctio illo dignissimos fugiat. Sed, dolorem doloremque excepturi ullam deserunt quam?</p>
            </article>
        </article>
    )
}

export default ProductDetailComp;