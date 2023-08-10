import CardTravel from "./CardTravel";
import Arrow from "./Arrow";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carrousel({ data }) {
  //Slide prev y next
  let [counter, setCounter] = useState(0); // Variable de inicio
  let [counterTo, setCounterTo] = useState(4); // Variable de Final
    function next_slide() {
        if (data.length === counterTo) {
        setCounter(0);
        setCounterTo(4);
        } else {
        setCounter(counter + 4);
        setCounterTo(counterTo + 4);
        }
    }
    function prev_slide() {
        if (counter === 0) {
        setCounter(data.length - 4);
        setCounterTo(data.length);
        } else {
        setCounter(counter - 4);
        setCounterTo(counterTo - 4);
        }
    }
    return (
        <>
        <div className="p-4 lg:w-1/2 my-4">
            <div className="md:p-3 flex items-center justify-center mx-full">
                <Arrow onClick={prev_slide} direction="M15.75 19.5L8.25 12l7.5-7.5" />
                <div className="flex flex-wrap items-center w-11/12 ">
                    {data.slice(counter, counterTo).map((each) => (
                    <CardTravel
                        key={each.id}
                        src={each.photo}
                        alt={each.city}
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
