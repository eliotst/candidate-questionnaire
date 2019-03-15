const defaultSpreadsheetId = "1EYBBLTLXT5BbbDalENOaIQNIWBpkYrNxc64sETH7X6E";
const defaultKey = "AIzaSyC0anour3kbel1AV-hlxTiX9blUXUQqw3U";

export default function loadConfig({ accessKey, districtSpreadsheetMap, spreadsheetId }) {
    const windowConfig = window.CandidateQuestionnaire || {};
    return {
        accessKey: accessKey || windowConfig.accessKey || defaultKey,
        districtSpreadsheetMap: districtSpreadsheetMap || windowConfig.districtSpreadsheetMap,
        spreadsheetId: spreadsheetId || windowConfig.spreadsheetId || defaultSpreadsheetId,
        supportSearch: windowConfig.supportSearch === undefined ? true : windowConfig.supportSearch,
    };
}
