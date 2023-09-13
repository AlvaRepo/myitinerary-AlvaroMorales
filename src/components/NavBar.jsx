import Island from "./island";
import HambMenu from "./HambMenu";
import HambContent from "./HambContent";
import MyTineraryLtr from "./MyTineraryLtr";
import SlideHamb from "./SlideHamb";

import { useSelector } from "react-redux";
import { useState } from "react";

export default function NavBar() {
    let [show, setShow] = useState(true)
    let user = useSelector(store => store.users.user)
    return (
        <nav className="flex p-12 h-auto justify-center">
            <Island />
            <MyTineraryLtr />
            {user.mail ? (
                <div className="flex">
                    <img
                        src={user.photo}
                        alt=""
                        className="w-[100px] h-[100px] p-2"
                    />
                    <h2
                    className="text-xl p-3 opacity-0 sm:opacity-100 transition-opacity"
                    >
                        {user.name} {user.lastName}
                    </h2>
                </div>
            ) : ('')}
            {show ? '' : <SlideHamb />}
            <HambContent />
            <HambMenu onClick={() => setShow(!show)} />
        </nav>
    );
}
