import React from 'react'
import Carrousel from './btnComps/Carrousel'

export default function DiscoverSection() {
return (
    <div className="my-20 mx-20 flex ">
        <div className='w-2/4'>
            <h3 className='font-bold w-full text-xl md:text-3xl lg:text-5xl text-justify'>Find the perfect destination</h3>
            <p className='text-justify'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className="buttonPlu hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View More</button>
        </div>
    <Carrousel />
    </div>  )
}
