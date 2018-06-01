import axios from "axios";

const apiUrl = "https://www.googleapis.com/civicinfo/v2/representatives";
const defaultKey = "AIzaSyC0anour3kbel1AV-hlxTiX9blUXUQqw3U";

function generateUrl(address, key) {
    let addressString = `${address.addressOne} ${address.postalCode}`;
    if (address.addressTwo) {
        addressString = `${address.addressOne} ${address.postalCode}`;
    }
    return `${apiUrl}?key=${key}&address=${addressString}`;
}

function isRelevantOffice(office) {
    return office.divisionId.indexOf("sldu") !== -1 || office.divisionId.indexOf("sldl") !== -1;
}

export default class DistrictClient {
    constructor(accessToken) {
        this.accessToken = accessToken || defaultKey;
    }

    getDistrictsByAddress(address) {
        const requestUrl = generateUrl(address, this.accessToken);
        return axios.get(requestUrl)
            .then(response => response.data.offices
                .filter(isRelevantOffice)
                .map(office => office.name));
}
}
