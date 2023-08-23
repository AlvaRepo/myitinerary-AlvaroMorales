import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl.js';
import CardCity from '../components/CardCity.jsx'
import NotFoundMessage from '../components/NotFoundMessage.jsx';
import CardTravel from '../components/CardTravel.jsx'

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const [notFound, setNotFound] = useState(false);
    const text = useRef();
    useEffect(() => {
      setNotFound(false);
      axios(apiUrl + 'cities?city=' + text.current.value)
        .then((res) => {
          console.log(res.data.response)
          if (res.data.response.length === 0) {
            setNotFound(true);
          } else {
            setCities(res.data.response);
          }
        })
        .catch((err) => setNotFound(true));
    }, [reEffect]);
  
    function handleFilter() {
      setReEffect(!reEffect);
    }

  return (
    <>

      <div className='flex flex-col'>
        
        <div className="w-full flex flex-col items-center justify-center h-1/2 py-10" >
              <div>
              <div className='p-16 relative text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl drop-shadow-xl'>
                  Collection of the most beautiful places and experiences.
              </div>
                <div>
                  
                </div>
                
                  
              </div>
              <div className="relative flex items-center">
                <input
                  name="text"
                  id="text"
                  ref={text}
                  type="text"
                  className="py-2 pl-10 pr-4 focus:outline-none focus:shadow-outline rounded-lg bg-white text-black w-full drop-shadow"
                  placeholder="Write to filter..."
                  onKeyUp={handleFilter}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-5.2-5.2"></path>
                    <circle cx="10" cy="10" r="8"></circle>
                  </svg>
                </div>
              </div>
              
              

        </div>
        <div className='h-1/2 bg-white bg-opacity-20 py-10 flex flex-row w-auto items-center justify-center z-[2]'>
          {notFound ? (<NotFoundMessage />) : (
                cities.slice(0,4).map((each) => (
                  <div className='w-full p-3'>
                    <CardCity key={each._id} src={each.photo} alt={each.city} txtdesc={each.country} c_id={each._id}/>
                  </div>
                ))
            )
          }
        </div>
     

        </div>
    </>
  )
}
