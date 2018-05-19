export default class DistrictClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }

    getDistrict(districtId) {
        return Promise.resolve({
            id: "ocd-division/country:us/state:pa/sldl:97",
            name: "PA State House District 97",
            type: "House",
        });
    }

    getDistrictByAddress(address) {
        return null;
    }
}
