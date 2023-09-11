import React from 'react';
import { Link as Anchor } from 'react-router-dom';

const ViewMoreButton = ({ c_id, src, alt }) => {

    let cityId = `/city/${c_id}?photo=${src}&name=${alt}`;

    return (
        <Anchor
        to={cityId}
        className="flex justify-center w-[200px] px-4 py-2 text-xl bg-purple-600 text-white rounded hover:text-purple-800 hover:bg-purple-200 transition delay-100 transition-ease-in"
        >
        View More
        </Anchor>
    );
};

export default ViewMoreButton;