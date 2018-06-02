import PropTypes from "prop-types";
import React from "react";

export default function DistrictList({ currentDistrict, districts, onSelectDistrict }) {
    const districtButtons = districts.sort().map(district =>
        (
            <li className="button-item" key={district}>
                <button
                    className={currentDistrict === district ? "current" : ""}
                    onClick={() => onSelectDistrict(district)}
                >
                    {district}
                </button>
            </li>
        ));
    return (
        <div className="district-list">
            <ul className="button-list">
                {districtButtons}
            </ul>
        </div>
    );
}

DistrictList.propTypes = {
    currentDistrict: PropTypes.string,
    districts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectDistrict: PropTypes.func.isRequired,
};

DistrictList.defaultProps = {
    currentDistrict: null,
};
