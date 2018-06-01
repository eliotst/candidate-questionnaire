import PropTypes from "prop-types";
import React from "react";

import DistrictList from "./DistrictList";
import DistrictSearch from "./DistrictSearch";

export default function DistrictPicker({ currentDistrict, districts, onSelectDistrict }) {
    return (
        <div className="district-picker">
            <DistrictSearch onSelectDistrict={onSelectDistrict} />
            <DistrictList
                currentDistrict={currentDistrict}
                districts={districts}
                onSelectDistrict={onSelectDistrict}
            />
        </div>
    );
}

DistrictPicker.propTypes = {
    currentDistrict: PropTypes.string.isRequired,
    districts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectDistrict: PropTypes.func.isRequired,
};

