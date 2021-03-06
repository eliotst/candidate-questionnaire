import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const houseRegex = /House/;
const senateRegex = /Senate/;

function categorizeDistricts(districts) {
    const buckets = {
        house: [],
        other: [],
        senate: [],
    };
    districts.forEach((district) => {
        if (district.match(houseRegex)) {
            buckets.house.push(district);
        } else if (district.match(senateRegex)) {
            buckets.senate.push(district);
        } else {
            buckets.other.push(district);
        }
    });
    return buckets;
}

export default function DistrictList({ currentDistrict, districts }) {
    const generateButton = district => (
        <li className="button-item" key={district}>
            <Link
                className={currentDistrict === district ? "current btn" : "btn"}
                to={`/district/${district}`}
            >
                {district}
            </Link>
        </li>);
    const categorizedDistricts = categorizeDistricts(districts.sort());
    const houseButtons = categorizedDistricts.house.map(generateButton);
    const senateButtons = categorizedDistricts.senate.map(generateButton);
    const otherButtons = categorizedDistricts.other.map(generateButton);
    return (
        <div className="district-list">
            {houseButtons.length > 0 ?
                <div>
                    <h3 className="district-header">House Districts</h3>
                    <ul className="button-list">
                        {houseButtons}
                    </ul>
                </div> : null}
            {senateButtons.length > 0 ?
                <div>
                    <h3 className="district-header">Senate Districts</h3>
                    <ul className="button-list">
                        {senateButtons}
                    </ul>
                </div> : null}
            {otherButtons.length > 0 ?
                <div>
                    <h3 className="district-header">Districts</h3>
                    <ul className="button-list">
                        {otherButtons}
                    </ul>
                </div> : null}
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
