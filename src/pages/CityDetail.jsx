import { useParams } from 'react-router-dom';
import Itineraries from '../components/Itineraries.jsx';
import {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux" 
import city_actions from '../store/actions/cities.js';
import CardTravel from '../components/CardTravel.jsx';
const { read_city } = city_actions;

const CityDetail = () => {
  const { city_id } = useParams()
  const dispatch = useDispatch()
  const [show,setShow] = useState(false)

  useEffect(() => {
    dispatch (read_city({ id:city_id }))
  }, []);
  const city = useSelector(store => store.cities.city) 
  console.log(city)

  return (
    <>
      <div className='flex flex-col text-xl items-center justify-center text-center'>
        <h1 className='flex p-6 w-full justify-center font-bold text-sm md:text-xl lg:text-2xl bg-purple-600 text-white'>
          {city.country} - {city.city}
        </h1>
        <img 
          className='h-auto select-none w-auto h-auto lg:w-full '
          src={city.photo} 
          alt={city.country} 
        />
        <p className='text-justify p-8 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800'>{city.description}</p>
        <button 
          className='z-6 select-none justify-end w-full px-4 py-2 bg-purple-600 rounded hover:bg-purple-400 transition duration-300 ease-in-out'
          onClick={()=>setShow(!show)}> 
          <span className='px-8'>
            &#9660;
          </span>
        </button>
        {show? (<Itineraries city_id={city_id}/>) : ('')}
      </div>

    </>
    
  );
};

export default CityDetail;