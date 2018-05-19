import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

export default function CurrentDistrict({ currentDistrict }) {
    return (
        <button className="current-district">
            {currentDistrict} <Link className="instructions" to="/">(click to change)</Link>
        </button>
    );
}

CurrentDistrict.propTypes = {
    currentDistrict: PropTypes.string.isRequired,
};
