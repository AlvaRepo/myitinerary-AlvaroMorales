import ViewMoreButton from "./ViewMore";


export default function CardCity({src, alt ,txtdesc, c_id}) {
    return (
            <div className='flex rounded-full select-none z-[2] justify-center w-auto p-5   hover:scale-110 transition ease-in-out'>
                <div className="relative">
                <div className="absolute flex-col items-center w-[200px] bg-black bg-opacity-40 hover:bg-opacity-50 rounded-tl-3xl rounded-br-3xl items-center">                 
                    <h2 className="text-center font-bold text-md md:text-2xl lg:text-3xl text-white px-3">
                        {alt}
                    </h2>
                    <p className="text-center text-white xs:text-xs sm:text-sm md:text-md lg:text-lg">{txtdesc}</p>
                </div>

                </div>
                <div className="relative" loading='lazy'>
                    <div className="bottom-0 left-0 absolute rounded-lg rounded-lg-tl">
                        <ViewMoreButton src= {src} c_id={c_id} alt={alt}/>
                    </div>

                </div>
                  {/* Imágen de Fondo */}
                <img 
                    className= ' h-[220px] rounded-3xl ' 
                    src={src} 
                    alt={alt} />
            </div>  
    )
}
