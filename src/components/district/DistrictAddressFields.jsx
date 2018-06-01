import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";

export default function DistrictAddressFields({ address, onChangeAddressField }) {
    const changeField = evt => onChangeAddressField(evt.target.name, evt.target.value);
    return (
        <div className="address-fields">
            <div>
                <label htmlFor="addressOne">Address One:</label>
                <input
                    name="addressOne"
                    id="addressOne"
                    onChange={changeField}
                    value={address.addressOne}
                />
            </div>
            <div>
                <label htmlFor="addressOne">Address Two:</label>
                <input
                    name="addressTwo"
                    id="addressTwo"
                    onChange={changeField}
                    value={address.addressTwo}
                />
            </div>
            <div>
                <label htmlFor="addressOne">Postal Code</label>
                <input
                    name="postalCode"
                    id="postalCode"
                    onChange={changeField}
                    value={address.postalCode}
                />
            </div>
        </div>
    );
}

DistrictAddressFields.propTypes = {
    address: propTypes.address.isRequired,
    onChangeAddressField: PropTypes.func.isRequired,
};
