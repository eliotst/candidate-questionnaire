import PropTypes from "prop-types";
import React from "react";

import DistrictAddressFields from "./DistrictAddressFields";
import DistrictClient from "../../clients/district";
import propTypes from "../prop-types";

export default class DistrictSearch extends React.Component {
    constructor(props) {
        super(props);
        this.districtClient = new DistrictClient();
        this.search = this.search.bind(this);
    }

    search() {
        const { address, updateMatches } = this.props;
        this.districtClient.getDistrictsByAddress(address)
            .then(districts => updateMatches(districts));
    }

    render() {
        const { address, onChangeAddressField, showAll } = this.props;
        return (
            <div className="district-search">
                <DistrictAddressFields
                    address={address}
                    onChangeAddressField={onChangeAddressField}
                />
                <div className="search-buttons">
                    <button className="btn" onClick={this.search}>Search</button>
                    <button className="btn" onClick={showAll}>Show All Districts</button>
                </div>
            </div>
        );
    }
}

DistrictSearch.propTypes = {
    address: propTypes.address.isRequired,
    onChangeAddressField: PropTypes.func.isRequired,
    showAll: PropTypes.func.isRequired,
    updateMatches: PropTypes.func.isRequired,
};
