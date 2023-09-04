import React from "react";
export default ({ userName, userPhoto, price, duration, tags }) => {
    return (
        <div className="flex items-start justify-between p-4 border border-gray-300 rounded-lg shadow-md">
            {/* Columna 1: Foto del usuario y nombre */}
            <div className="flex items-center">
                <img
                    src={userPhoto}
                    alt={`${userName}'s profile`}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-lg font-semibold">{userName}</h2>
                    <p className="text-gray-600">@{userName}</p>
                </div>
            </div>

            {/* Columna 2: Hashtags */}
            <div className="flex flex-wrap items-center justify-center flex-grow">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 m-1 text-sm font-semibold bg-blue-200 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Columna 3: Duración */}
            <div className="text-center">
                <p className="text-lg font-semibold">{duration} hours</p>
            </div>

            {/* Columna 4: Precio */}
            <div className="text-center">
                <p className="text-lg font-semibold">${price}</p>
            </div>

            {/* Botón "View More" */}
            <div className="mt-4 text-center">
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    View More
                </button>
            </div>
        </div>
    );
}
