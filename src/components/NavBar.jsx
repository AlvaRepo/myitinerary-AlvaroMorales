import Island from "./island";
import HambMenu from "./HambMenu";
import HambContent from "./HambContent";
import MyTineraryLtr from "./MyTineraryLtr";
import SlideHamb from "./SlideHamb";
import { useState } from "react";
import { Link as Anchor} from "react-router-dom";

export default function NavBar() {
    let [show, setShow] = useState (true)
    return (
        <nav className="flex p-12 h-auto justify-center">
            <Island />
            <MyTineraryLtr />
            {show ? <div></div> : <SlideHamb />}
            <HambContent />
                    
            <HambMenu onClick={() => setShow(!show)} />
        </nav>
    );
}
