import ButLogin from "./ButSignIn.jsx";
import ButSignOut from "./ButSignOut.jsx"
import { Link as Anchor } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HambContent() {
    
    let mail = useSelector (store => store.users.user.mail)
    return (
        <div className="hidden md:flex md:gap-x-3 xl items-center">
            <Anchor
                to='home'
                className="font-semibold w-1/3 text-lg lg:text-xl 2xl:text-2xl xl:grow"
                href="#"
            >
                Home
            </Anchor>
            <Anchor
                to='city'
                className="animate-pulse font-semibold w-1/3 text-lg lg:text-xl 2xl:text-2xl "
                href="#"
            >
                Cities
            </Anchor>
            {!mail? (<Anchor to='SignIn' className='flex items-center ml-1 text-white font-bold text-lg lg:text-xl 2xl:text-2xl'>
                <ButLogin />
            </Anchor>): (
            <ButSignOut />)}
            

        </div>
    );
}
