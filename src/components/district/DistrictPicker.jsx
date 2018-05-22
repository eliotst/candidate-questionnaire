import PropTypes from "prop-types";
import React from "react";

import DistrictList from "./DistrictList";

export default function DistrictPicker({ districts, onSelectDistrict }) {
    return (
        <div className="district-picker">
            <DistrictList districts={districts} onSelectDistrict={onSelectDistrict} />
        </div>
    );
}

DistrictPicker.propTypes = {
    districts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectDistrict: PropTypes.func.isRequired,
};

