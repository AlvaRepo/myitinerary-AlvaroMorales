import HambContent from "./HambContent"


export default function HambMenu( {onClick} ) {
    return (
    <button className="text-white text-xl md:hidden">
        <svg
            className="h-6 w-6 border-2 rounded border-[#4F46E5] hover:bg-[#f1f1e1] hover:text-white "
            fill="none"
            stroke="#4F46E5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick= {onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
            ></path>
        </svg>
        
    </button>    )
}
