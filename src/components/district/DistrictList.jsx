import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

export default function DistrictList({ currentDistrict, districts }) {
    const districtButtons = districts.sort().map(district =>
        (
            <li className="button-item" key={district}>
                <Link
                    className={currentDistrict === district ? "current btn" : "btn"}
                    to={`/district/${district}`}
                >
                    {district}
                </Link>
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
};

DistrictList.defaultProps = {
    currentDistrict: null,
};
