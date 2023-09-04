import itinerary_actions from '../store/actions/itineraries.js';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import NoItineraries from '../components/NoItineraries.jsx'
import CardItineraries from './CardItineraries.jsx';

const { read_itineraries_by_city } = itinerary_actions;

export default (city_id) => {
    const [show, setShow] = useState (false)
    const itineraries = useSelector(store => store.itineraries.itineraries_by_city)
    const dispatch = useDispatch()
    useEffect(
        () => { dispatch(read_itineraries_by_city(city_id)) },
        [])

        function showBills(precio) {
            if (precio === 10) {
                return "1 billete de $10";
            } else if (precio === 200) {
                return "5 billetes de $40";
            } else if (precio > 10 && precio < 200) {
                const cantidadBilletes = Math.ceil(precio / 50); //Hago que cada billete valga 50
                return `${cantidadBilletes} billetes de $20 cada uno`;
            } else {
                return "Precio no válido";
            }
        }        
    return (
        <div>
            {itineraries.length === 0 ? (<NoItineraries />): ('')}
            {itineraries.map((each) => (
                <div key={each._id}>
                    <h3>Itinerary: {each.name}</h3>
                    <div className="flex items-start justify-between p-4 border border-gray-300 rounded-lg shadow-md">
                        {/* Columna 1: Foto del usuario y nombre */}
                        <div className="flex items-center">
                            <img
                                src={each.city_id.admin_id.photo}
                                alt={`${each.city_id.admin_id.name}'s profile`}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {each.city_id.admin_id.name}
                                </h2>
                                <p className="text-gray-600">@{each.city_id.admin_id.name}</p>
                            </div>
                        </div>

                        {/* Columna 2: Hashtags */}
                        <div className="flex flex-wrap items-center justify-center flex-grow">
                            {each.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 m-1 text-sm font-semibold bg-blue-200 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Columna 3: Duración */}
                        <div className="text-center">
                            <p className="text-lg font-semibold">{each.duration} hours</p>
                        </div>

                        {/* Columna 4: Precio */}
                        <div className="text-center">
                            <p className="text-lg font-semibold">{showBills(each.price)}</p>
                        </div>

                        {/* Botón "View More" */}
                        <div className="mt-4 text-center">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    onClick={()=>setShow(!show)}>
                                {!show ? ('View More'): ('Hide')}
                            </button>
                            
                        </div>
                        
                    </div>
                    
                    {show ? (<div> Activities under construction!! </div>): ('')}
                </div>
            ))}


        </div>
    )
}

