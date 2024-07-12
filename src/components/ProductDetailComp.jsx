const ProductDetailComp = ({product}) => {
    return (
        <section>
            <article className="flex flex-row divide-x-4 w-full py-3">
                <div className="contenedor-1 basis-3/4">
                    <img src={product.url} className=""/>
                </div>
                <div className="contenedor-2 flex flex-col divide-y-4 basis-1/4 overflow-hidden">
                    <div>
                        <img src={product.url} className=""/>
                    </div>
                    <div>
                        <img src={product.url} className=""/>
                    </div>
                    <div>
                        <img src={product.url} className=""/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ProductDetailComp;