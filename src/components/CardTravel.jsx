export default function CardTravel({src, alt ,txtdesc}) {
    return (
            <div className='w-1/2 rounded p-1'>
                <div className="absolute h-1/3 ml-3">                 
                    <h2 className="font-bold text-md md:text-2xl lg:text-4xl text-white drop-shadow-md">{alt}</h2>
                    <p className="text-justify text-white">{txtdesc}</p>
                </div>
                  {/* Imágen de Fondo */}
                <img className= 'w-full md:w-full lg:w-full rounded-lg' src={src} alt={alt} />
            </div>  
    )
}
