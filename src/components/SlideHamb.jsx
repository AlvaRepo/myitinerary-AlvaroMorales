
export default function SlideHamb() {
    return (
        <div className="absolute right-4 mt-36 mr-6 bg-[#4F46E5] rounded-md shadow-lg z-30">
        <ul className="">
            <li className="px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
            Home
            </li>
            <li className="px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
            Log In
            </li>
            <li className="animate-bounce px-8 py-2 text-white cursor-pointer hover:bg-white hover:text-[#4F46E5]">
            Cities
            </li>
        </ul>
        </div>
    );
}
