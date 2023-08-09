export default function Arrow({ direction }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={ direction } />
        </svg>
    ) 
}

