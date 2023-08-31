import ViewMoreButton from "./ViewMore";


export default function CardCity({src, alt ,txtdesc, c_id}) {
    return (
            <div className='flex rounded select-none z-[2] justify-center'>
                <div className="relative">
                <div className="absolute flex-col w-[200px] bg-black bg-opacity-40 hover:bg-opacity-50 rounded-lg items-center">                 
                    <h2 className="text-center font-bold text-sm md:text-2xl lg:text-3xl text-white px-3">
                        {alt}
                    </h2>
                    <p className="text-center text-white xs:text-xs sm:text-sm md:text-md lg:text-lg">{txtdesc}</p>
                </div>

                </div>
                <div className="relative">
                    <div className="bottom-0 absolute bg-black bg-opacity-40 hover:bg-opacity-50 rounded-lg mr-0">
                        <ViewMoreButton src= {src} c_id={c_id} alt={alt}/>
                    </div>

                </div>
                  {/* Imágen de Fondo */}
                <img 
                    className= 'rounded-lg h-[220px]' 
                    src={src} 
                    alt={alt} />
            </div>  
    )
}
