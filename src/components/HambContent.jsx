import ButLogin from "./ButLogin";
import { Link as Anchor } from "react-router-dom";
export default function HambContent() {
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
            <ButLogin />
        </div>
    );
}
