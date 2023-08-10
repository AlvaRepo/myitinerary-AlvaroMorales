import Island from "./island";
import HambMenu from "./HambMenu";
import HambContent from "./HambContent";
import MyTineraryLtr from "./MyTineraryLtr";
import SlideHamb from "./SlideHamb";
import { useState } from "react";
export default function NavBar() {
    let [show, setShow] = useState (true)
    return (
        <nav className="mt-10 mx-10 flex h-6 items-center">
            <Island />
            <MyTineraryLtr />
            {show ? <div></div> : <SlideHamb />}
            <HambContent />
                    
            <HambMenu onClick={() => setShow(!show)} />
        </nav>
    );
}
