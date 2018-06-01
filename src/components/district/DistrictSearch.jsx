import PropTypes from "prop-types";
import React from "react";

import DistrictAddressFields from "./DistrictAddressFields";
import DistrictClient from "../../clients/district";

export default class DistrictSearch extends React.Component {
    constructor(props) {
        super(props);
        this.districtClient = new DistrictClient();
        this.state = {
            address: {
                addressOne: undefined,
                addressTwo: undefined,
                city: undefined,
                state: undefined,
                postalCode: undefined,
            },
            matchingDistricts: [],
        };
        this.changeAddressField = this.changeAddressField.bind(this);
        this.search = this.search.bind(this);
    }

    changeAddressField(fieldName, value) {
        const { address } = this.state;
        const updatedAddress = {
            addressOne: address.addressOne,
            addressTwo: address.addressTwo,
            city: address.city,
            state: address.state,
            postalCode: address.postalCode,
        };
        updatedAddress[fieldName] = value;
        this.setState({ address: updatedAddress });
    }

    search() {
        const { address } = this.state;
        this.districtClient.getDistrictsByAddress(address)
            .then(districts => this.setState({ matchingDistricts: districts }));
    }

    render() {
        const { address, matchingDistricts } = this.state;
        const { onSelectDistrict } = this.props;
        const matches = matchingDistricts.map(match =>
            <button key={match} onClick={() => onSelectDistrict(match)}>{match}</button>);
        return (
            <div>
                <DistrictAddressFields
                    address={address}
                    onChangeAddressField={this.changeAddressField}
                />
                <input type="button" value="Search" onClick={this.search} />
                <div>
                    {matches}
                </div>
            </div>
        );
    }
}

DistrictSearch.propTypes = {
    onSelectDistrict: PropTypes.func.isRequired,
};
