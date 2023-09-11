import CardTravel from "./CardTravel";
import Arrow from "./Arrow";
import { useState } from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import city_actions from '../store/actions/cities.js'

const { read_carousel } = city_actions

export default function Carrousel() {
const carousel = useSelector(store => store.cities.carousel)
const dispatch = useDispatch()
useEffect( 
    ()=>{
        if (carousel.length===0){
                    dispatch (read_carousel())
                }
            }, 
[]) //vacío por lo pronto
//Slide prev y next
let [counter, setCounter] = useState(0); // Variable de inicio
let [counterTo, setCounterTo] = useState(4); // Variable de Final
    function next_slide() {
        if (carousel.length === counterTo) {
        setCounter(0);
        setCounterTo(4);
        } else {
        setCounter(counter + 4);
        setCounterTo(counterTo + 4);
        }
    }
    function prev_slide() {
        if (counter === 0) {
        setCounter(carousel.length - 4);
        setCounterTo(carousel.length);
        } else {
        setCounter(counter - 4);
        setCounterTo(counterTo - 4);
        }
    }
    return (
        <>
        <div className="p-2 lg:w-1/2 my-4">
            <div className="md:p-3 flex items-center justify-center">
                <Arrow onClick={prev_slide} direction="M15.75 19.5L8.25 12l7.5-7.5" />
                <div className="flex flex-wrap items-center w-full ">
                    {carousel.slice(counter, counterTo).map((each) => (
                    <CardTravel
                        key={each._id}
                        src={each.photo}
                        alt={each.country}
                        txtdesc={each.city}
                        
                                            />
                    ))}
                </div>
                <Arrow onClick={next_slide} direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </div>
        </div>
        </>
    );
}
