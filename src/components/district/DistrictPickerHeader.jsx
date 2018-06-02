import PropTypes from "prop-types";
import React from "react";

export default function DistrictPickerHeader({ currentDistrict, isShowingSearch, showSearch }) {
    const instructions = (
        <div className="instructions">
            Don&#39;t know your district?
            <button className="show-search" onClick={showSearch}>Click here</button>
        </div>
    );
    const titleText = isShowingSearch ? "Find Your District" : "Pick a District";
    const title = isShowingSearch || currentDistrict === null ?
        <h2>{titleText}</h2> : null;
    return (
        <div className="district-picker-header">
            {title}
            {currentDistrict === null && !isShowingSearch ?
                instructions : null}
        </div>
    );
}

DistrictPickerHeader.propTypes = {
    currentDistrict: PropTypes.string,
    isShowingSearch: PropTypes.bool.isRequired,
    showSearch: PropTypes.func.isRequired,
};

DistrictPickerHeader.defaultProps = {
    currentDistrict: null,
};

