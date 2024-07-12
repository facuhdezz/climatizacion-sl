const ProductDetailComp = ({product}) => {
    return (
        <>
            <article className="flex justify-center mx-auto w-full sm:flex-row-reverse gap-1 divide-x-2 basis-1/2">
                <div className="contenedor-1 basis-3/4 overflow-hidden border border-gray-300 rounded-md">
                    <img src={product.url} className="hover:scale-105 duration-200 hover:cursor-pointer mx-auto"/>
                </div>
                <div className="contenedor-2 flex flex-col justify-between basis-1/4">
                    <div className="overflow-hidden border border-gray-300 rounded-md">
                        <img src={product.url} className="hover:scale-105 duration-200 hover:cursor-pointer"/>
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md">
                        <img src={product.url} className="hover:scale-105 duration-200 hover:cursor-pointer"/>
                    </div>
                    <div className="overflow-hidden border border-gray-300 rounded-md">
                        <img src={product.url} className="hover:scale-105 duration-200 hover:cursor-pointer"/>
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-1 basis-1/2">
                <h3 className="text-gray-600 sm:text-lg">{product.nombre}</h3>
                <h1 className="font-semibold text-xl sm:text-3xl leading-tight">{product.descripcion}</h1>
                <h4 className="text-lg sm:text-2xl">{product.moneda} <span className="font-bold">{product.precio}</span></h4>
                <p className="text-sm sm:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos aut consectetur, officiis mollitia labore laudantium repudiandae rerum sit distinctio illo dignissimos fugiat. Sed, dolorem doloremque excepturi ullam deserunt quam?</p>
            </article>
        </>
    )
}

export default ProductDetailComp;