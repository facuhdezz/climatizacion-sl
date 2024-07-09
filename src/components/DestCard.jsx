const DestCard = (item) => {
    return (
        <article className="flex flex-col bg-gray-50 w-36 border shrink-0 p-2 gap-2 justify-between rounded">
            <div className="flex flex-col items-center gap-2">
                <div className="w-[80%]">
                    <img className="w-auto h-auto" src={item.url} />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xs text-blue-800">{item.nombre}</h3>
                    <h1 className="text-sm">{item.descripcion}</h1>
                    <h4 className="text-sm">{item.moneda} <span className="font-bold">{item.precio}</span></h4>
                </div>
            </div>
            
            <button className="border rounded bg-white">Ver más</button>
        </article>
    )
}

export default DestCard;