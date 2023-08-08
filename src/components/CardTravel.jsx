
export default function CardTravel(src, alt ,txtdesc) {
    return (
        <div className='flex flex-row items-center mt-4'>
            <div className="">carrousel</div>
            <div className="flex-col bg-sky-300/95 rounded-xl items-center p-3">                 
                <h2 className="font-bold w-full text-xl md:text-2xl lg:text-4xl text-justify">Titulo</h2>
                <p className="text-justify">{txtdesc}</p>
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}
