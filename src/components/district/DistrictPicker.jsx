import PropTypes from "prop-types";
import React from "react";

import CurrentDistrict from "./CurrentDistrict";
import DistrictList from "./DistrictList";
import DistrictPickerHeader from "./DistrictPickerHeader";
import DistrictSearch from "./DistrictSearch";

export default class DistrictPicker extends React.Component {
    constructor(props) {
        super(props);
        const { districts } = props;
        this.state = {
            address: {
                addressOne: undefined,
                addressTwo: undefined,
                city: undefined,
                state: undefined,
                postalCode: undefined,
            },
            isShowingSearch: false,
            matchingDistricts: districts,
        };
        this.changeAddressField = this.changeAddressField.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showSearch = this.showSearch.bind(this);
        this.updateMatches = this.updateMatches.bind(this);
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

    showAll() {
        const { districts } = this.props;
        this.setState({
            isShowingSearch: false,
            matchingDistricts: districts,
        });
    }

    showSearch() {
        this.setState({
            isShowingSearch: true,
            matchingDistricts: [],
        });
    }

    updateMatches(matches) {
        const { districts } = this.props;
        if (matches === undefined) {
            this.setState({ matchingDistricts: districts });
        } else {
            const relevantMatches = matches.filter(match => districts.indexOf(match) !== -1);
            this.setState({ matchingDistricts: relevantMatches });
        }
    }

    render() {
        const { match, supportSearch } = this.props;
        const { currentDistrict = null } = match.params;
        const { address, isShowingSearch, matchingDistricts } = this.state;
        return (
            <div className="district-picker">
                {supportSearch ?
                    <div>
                        <DistrictPickerHeader
                            currentDistrict={currentDistrict}
                            isShowingSearch={isShowingSearch}
                            showSearch={this.showSearch}
                        />
                        {isShowingSearch ?
                            <DistrictSearch
                                address={address}
                                onChangeAddressField={this.changeAddressField}
                                showAll={this.showAll}
                                updateMatches={this.updateMatches}
                            /> : null}
                    </div> : null}
                <div>
                    {currentDistrict === null ?
                        <DistrictList
                            currentDistrict={currentDistrict}
                            districts={matchingDistricts}
                        /> :
                        <CurrentDistrict
                            currentDistrict={currentDistrict}
                        />
                    }
                </div>
            </div>
        );
    }
}

DistrictPicker.propTypes = {
    districts: PropTypes.arrayOf(PropTypes.string).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            currentDistrict: PropTypes.string,
        }).isRequired,
    }).isRequired,
    supportSearch: PropTypes.bool.isRequired,
};
