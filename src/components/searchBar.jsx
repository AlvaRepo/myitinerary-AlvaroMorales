import React from "react";

const SearchBar = ({text}, {cities}) => {
    function handleFilter (text) {
        console.log(text)
    }
    return (
        <div className="relative bg-white rounded-lg shadow-md">
            <input
                name = 'text'
                id= "text"
                ref = {text}
                type="text"
                className="w-full py-2 pl-10 pr-4 leading-tight focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg"
                placeholder="Search..."
                onKeyUp={handleFilter}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M21 21l-5.2-5.2"></path>
                <circle cx="10" cy="10" r="8"></circle>
                </svg>
            </div>
{            console.log(cities)
}        
        </div>
    );
};

export default SearchBar;
