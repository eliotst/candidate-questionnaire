import PropTypes from "prop-types";
import React from "react";

export default function DistrictList({ currentDistrict, districts, onSelectDistrict }) {
    const districtOptions = districts.map(district =>
        (
            <option value={district} onClick={() => onSelectDistrict(district)}>
                {district}
            </option>
        ));
    const selectDistrict = evt => onSelectDistrict(evt.target.value);
    return (
        <div className="district-list">
            <label htmlFor="districtSelector">Pick Your District</label>
            <select id="districtSelector" value={currentDistrict} onChange={selectDistrict}>
                {districtOptions}
            </select>
        </div>
    );
}

DistrictList.propTypes = {
    currentDistrict: PropTypes.string,
    districts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectDistrict: PropTypes.func.isRequired,
};

DistrictList.defaultProps = {
    currentDistrict: "",
};
