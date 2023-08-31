// eslint-disable-next-line react/prop-types
export default function CardTravel({ src, alt, txtdesc }) {
    return (
        <div className='w-1/2 rounded p-1 select-none '>
            <div className="absolute h-1/3 ml-3">
                <h2 className="font-bold text-sm md:text-xl lg:text-2xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 p-2 shadow rounded-lg">
                    {alt}
                </h2>

                <p className="text-center text-white xs: text-xs sm:text-sm md:text-md lg:text-lg ">{txtdesc}</p>
            </div>
            {/* Imágen de Fondo */}
            <img
                className='h-36 w-auto md:w-400 lg:w-full rounded-lg select-none'
                src={src}
                alt={alt} />
        </div>
    )
}
