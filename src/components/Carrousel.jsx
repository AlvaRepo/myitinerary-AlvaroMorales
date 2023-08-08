import CardTravel from "./CardTravel";
import DiscoverSection from "./DiscoverSection"
export default function Carrousel() {
console.log();
        return (
        <>
                <div className='flex flex-col items-center mt-4'>
            <div className="">carrousel</div>
            <div className="flex-col bg-sky-300/95 rounded-xl items-center p-3">                 
                <h2 className="font-bold w-full text-xl md:text-2xl lg:text-4xl text-justify">Titulo</h2>
                <p className="text-justify">{txtdesc}</p>
                <img src={src} alt={alt} />
            </div>
        </div>
            {/* <CardTravel  src={data[0].photo} alt={data[0].city} txtdesc={data[0].city}/> */}
        </>
    )
}

