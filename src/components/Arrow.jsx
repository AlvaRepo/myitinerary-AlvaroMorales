export default function Arrow({ direction, onClick }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="black" 
            viewBox="0 0 24 24" 
            strokeWidth={5.5} 
            stroke="currentColor" 
            className="text-black w-6 h-6 cursor-pointer"
            onClick={onClick}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d={ direction } />
        </svg>
    ) 
}

