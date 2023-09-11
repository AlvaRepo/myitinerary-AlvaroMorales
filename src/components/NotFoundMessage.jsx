import React from "react";

const NotFoundMessage = () => {
    return (
        <div className="flex items-center justify-center">
            <p className="text-lg text-2xl drop-shadow p-6">
                Search not found. Please try different terms.
            </p>
        </div>
    );
};

export default NotFoundMessage;
