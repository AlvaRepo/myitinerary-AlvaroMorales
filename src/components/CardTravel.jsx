
export default function CardTravel({src, alt ,txtdesc}) {
    return (
            <div className='w-1/2 rounded p-1 select-none  '>
                <div className="w-auto">
                    <div className="absolute z-[2]">                 
                        <h2 className="p-3 font-bold text-sm md:text-xl lg:text-2xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 p-2 shadow rounded-lg">
                            {alt}
                        </h2>
                        <p className="text-center text-white xs: text-xs sm:text-sm md:text-md lg:text-lg ">{txtdesc}</p>
                    </div>
                    {/* Imágen de Fondo */}
                    <img 
                        className= 'relative z-[1] sm:w-full h-auto lg:w-full rounded-lg select-none' 
                        src={src} 
                        alt={alt} 
                        loading="lazy"
                    />
                </div>
            </div>  
    )
}
