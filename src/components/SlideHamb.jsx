import { Link as Anchor } from "react-router-dom";
export default function SlideHamb() {
    return (
        <Anchor to='home' className="absolute right-4 mt-36 mr-6 bg-[#4F46E5] rounded-md shadow-lg z-30">
            <ul className="flex flex-col">
                <Anchor to='home' className="px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
                Home
                </Anchor>
                <Anchor to='Login'  className="px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
                Log In
                </Anchor>
                <Anchor to='city'  className="animate-bounce px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
                Cities
                </Anchor>
            </ul>
        </Anchor>
    );
}
