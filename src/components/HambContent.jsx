import ButLogin from "./ButLogin";
export default function HambContent() {
    return (
        <div className="hidden md:flex md:gap-x-3 xl items-center">
            <a
                className="font-semibold w-1/3 text-lg lg:text-xl 2xl:text-2xl xl:grow"
                href="#"
            >
                Home
            </a>
            <a
                className="animate-pulse font-semibold w-1/3 text-lg lg:text-xl 2xl:text-2xl "
                href="#"
            >
                Cities
            </a>
            <ButLogin />
        </div>
    );
}
