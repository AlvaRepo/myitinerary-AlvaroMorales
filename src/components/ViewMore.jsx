import React from 'react';
import { Link as Anchor } from 'react-router-dom';

const ViewMoreButton = ({ c_id, src, alt }) => {

    let cityId = `/city/${c_id}?photo=${src}&name=${alt}`;

    return (
        <Anchor
        to={cityId}
        className="flex justify-center w-[150px] px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400 transition duration-300 ease-in-out"
        >
        View More
        </Anchor>
    );
};

export default ViewMoreButton;