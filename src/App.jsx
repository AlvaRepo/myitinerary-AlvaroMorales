import './App.css'
import NavBar from './components/NavBar'
import MainLayout from './layouts/MainLayout'
function App() {
  let data = [
    {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
    {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
    {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
    {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
    {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
    {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
    {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
    {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
    {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
    {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
    {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
    {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
    {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
    {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
    {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
  ]
  return (
    
      <MainLayout > 
        <div className='grid grid-rows-2 md:grid-cols-2 gap-2 w-1/2'>
            <div className='rounded p-1'>
                <div className="absolute h-1/3 ml-3">                 
                    <h2 className="font-bold text-md md:text-2xl lg:text-4xl text-white drop-shadow-md">{data[0].city}</h2>
                    <p className="text-justify text-white">{data[0].city}</p>
                </div>
                
                {/* Imágen de Fondo */}
                <img className= 'w-full md:w-full lg:w-full rounded-lg' src={data[0].photo} alt={data[0].city} />
            </div>  
            <div className='rounded p-1'>
                <div className="absolute h-1/3 ml-3">                 
                    <h2 className="font-bold text-md md:text-2xl lg:text-4xl text-white drop-shadow-md">{data[0].city}</h2>
                    <p className="text-justify text-white">{data[0].city}</p>
                </div>
                
                {/* Imágen de Fondo */}
                <img className= 'w-full md:w-full lg:w-full rounded-lg' src={data[0].photo} alt={data[0].city} />
            </div>  
            <div className='rounded p-1'>
                <div className="absolute h-1/3 ml-3">                 
                    <h2 className="font-bold text-md md:text-2xl lg:text-4xl text-white drop-shadow-md">{data[0].city}</h2>
                    <p className="text-justify text-white">{data[0].city}</p>
                </div>
                
                {/* Imágen de Fondo */}
                <img className= 'w-full md:w-full lg:w-full rounded-lg' src={data[0].photo} alt={data[0].city} />
            </div>  
            <div className='rounded p-1'>
                <div className="absolute h-1/3 ml-3">                 
                    <h2 className="font-bold text-md md:text-2xl lg:text-4xl text-white drop-shadow-md">{data[0].city}</h2>
                    <p className="text-justify text-white">{data[0].city}</p>
                </div>
                
                {/* Imágen de Fondo */}
                <img className= 'w-full md:w-full lg:w-full rounded-lg' src={data[0].photo} alt={data[0].city} />
            </div>  
          </div>
          
      </MainLayout>
      
  )
}

export default App
