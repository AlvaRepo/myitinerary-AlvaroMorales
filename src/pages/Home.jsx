import DiscoverSection from '../components/DiscoverSection';
import Carrousel from "../components/Carrousel"
import Footer from '../components/Footer';
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
export default function Home() {
    const [data, setData] = useState([])
useEffect(() => {
    axios('./data.json')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
}, 
[]) //vacío por lo pronto

    return (
        <main >
            <h3 className='flex p-3 items-center justify-center italic text-sm md:text-base lg:text-xl xl:text-4xl text-white font-semibold drop-shadow-lg h-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Find your perfect trip, designed by insiders who know and love their cities!
            </h3>

            <div className='flex flex-col-reverse justify-center lg:flex-row xl:flex flex-row 2xl:flex'>
                <DiscoverSection />
                <Carrousel data={data}/>
            </div>
            <Footer />
        </main>
    )
}
