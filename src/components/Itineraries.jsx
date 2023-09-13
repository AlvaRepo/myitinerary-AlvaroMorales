import itinerary_actions from '../store/actions/itineraries.js';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import NoItineraries from '../components/NoItineraries.jsx'
import Bills from './Bills.jsx';
import Activities from './Activities.jsx'
const { read_itineraries_by_city } = itinerary_actions;
export default (city_id) => {
    const [show, setShow] = useState (false)
    const itineraries = useSelector(store => store.itineraries.itineraries_by_city)
    const dispatch = useDispatch()
    useEffect(
        () => { 
            dispatch(read_itineraries_by_city(city_id)) 
        },
        [])

        function showBills(precio) {
            let price = Math.round(precio/40);
            return price
        }        
    return (
        <div>
            {itineraries.length === 0 ? (<NoItineraries />): ('')}
            {itineraries.map((each) => (
                <div key={each._id}>
                    <h3>Itinerary: {each.name}</h3>
                    <div className="flex items-start justify-between p-4 border border-gray-300 rounded-lg shadow-md">
                        {/*username and photo*/}
                        <div className="p-3 flex items-center">
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

                        {/*Hashtags */}
                        <div className="p-3 flex flex-wrap items-center justify-center flex-grow">
                            {each.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 m-1 text-sm font-semibold bg-blue-200 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/*Duración */}
                        <div className="p-3 text-center">
                            <p className="text-lg font-semibold">{each.duration} hours</p>
                        </div>

                        {/* Precio */}
                        <div className="p-3 text-center">
                            < Bills price={showBills(each.price)} />
                        </div>

                        {/*"View More" */}
                        <div className="p-3 mt-4 text-center">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    onClick={()=>setShow(!show)}>
                                {!show ? ('View More'): ('Hide')}
                            </button>
                            
                        </div>

                    </div>
                    {show ? (
                            <Activities itinerary_id={each._id} />
                        ): ('')}
                    
                </div>
            ))}


        </div>
    )
}

