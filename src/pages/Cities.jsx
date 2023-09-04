import {useState, useEffect, useRef} from 'react';
import CardCity from '../components/CardCity.jsx'
import NotFoundMessage from '../components/NotFoundMessage.jsx';
import { useSelector, useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities.js'

const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector(store => store.cities.cities) 
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch (read_cities({ text:text.current?.value}))
    }, [reEffect]);
  
    function handleFilter() {
      setReEffect(!reEffect);
    }
    console.log(cities)
  return (
    <>
      <div className='flex flex-col'>
        
        <div className="w-full flex flex-col items-center justify-center h-1/2 py-10" >
              <div>
              <div className='p-16 relative text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl drop-shadow-xl'>
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
          {cities.length===0 ? (<NotFoundMessage />) : (
                cities.slice(0,4).map((each) => (
                    <CardCity className='w-150' key={each._id} src={each.photo} alt={each.city} txtdesc={each.country} c_id={each._id}/>
                ))
            )
          }
        </div>

        </div>
    </>
  )
}
