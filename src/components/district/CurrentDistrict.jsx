import PropTypes from "prop-types";
import React from "react";

export default function CurrentDistrict({ currentDistrict, onSelectDistrict }) {
    return (
        <button className="current-district" onClick={() => onSelectDistrict(null)}>
            {currentDistrict} <div className="instructions">(click to change)</div>
        </button>
    );
}

CurrentDistrict.propTypes = {
    currentDistrict: PropTypes.string.isRequired,
    onSelectDistrict: PropTypes.func.isRequired,
};
