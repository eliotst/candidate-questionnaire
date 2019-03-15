import PropTypes from "prop-types";
import React from "react";

export default function CurrentDistrict({ currentDistrict }) {
    return (
        <button className="current-district">
            {currentDistrict}
        </button>
    );
}

CurrentDistrict.propTypes = {
    currentDistrict: PropTypes.string.isRequired,
};
