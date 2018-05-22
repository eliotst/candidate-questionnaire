import axios from "axios";

const apiUrl = "https://sheets.googleapis.com/v4/spreadsheets";
const defaultSheetUrl = "https://docs.google.com/spreadsheets/d/1EYBBLTLXT5BbbDalENOaIQNIWBpkYrNxc64sETH7X6E/edit?usp=sharing";
const defaultSpreadsheetId = "1EYBBLTLXT5BbbDalENOaIQNIWBpkYrNxc64sETH7X6E";
const defaultKey = "AIzaSyC0anour3kbel1AV-hlxTiX9blUXUQqw3U";

const RANGE = "A1:AA600";

function generateUrl(spreadsheetId, range, key) {
    return `${apiUrl}/${spreadsheetId}/values/${range}?key=${key}`;
}

function getSpreadsheetData({ spreadsheetId = defaultSpreadsheetId, range = RANGE, key = defaultKey }) {
    const requestUrl = generateUrl(spreadsheetId, range, key);
    return axios.get(requestUrl)
        .then(response => response.data.values);
}

function mapRow(row, fieldRowIndexMap) {
    const fieldNames = Object.keys(fieldRowIndexMap);
    return fieldNames.reduce((acc, fieldName) => {
        const result = acc;
        const fieldIndex = fieldRowIndexMap[fieldName];
        result[fieldName] = row[fieldIndex] || "";
        return result;
    }, {});
}

function buildFieldRowIndexMap(header) {
    const result = {};
    header.forEach((key, index) => {
        result[key] = index;
    });
    return result;
}

function parseSpreadsheetData(values) {
    const fieldRowIndexMap = buildFieldRowIndexMap(values[0]);
    const csvValues = values.slice(1).map(row => mapRow(row, fieldRowIndexMap));
    return csvValues;
}

function mapCandidates(csvData) {
    return csvData.map(csvDatum => ({
        name: csvDatum.Name,
        district: csvDatum.District,
        party: csvDatum.Party,
        candidateType: csvDatum["Candidate Type"],
        writeIn: csvDatum["Write In?"] === "TRUE",
        imageUrl: csvDatum["Candidate Picture URL"],
        website: csvDatum["Candidate Website URL"],
        facebookId: csvDatum["Candidate Facebook Name"],
    }));
}

function mapQuestions(csvData) {
    const firstCandidate = csvData[0];
    const questions = Object.keys(firstCandidate)
        .filter(key => key !== "Candidate Name");
    const questionObjects = questions.map(questionText =>
        ({
            text: questionText,
            answers: csvData.map(csvDatum =>
                ({
                    candidate: csvDatum["Candidate Name"],
                    answer: csvDatum[questionText],
                })),
        }));
    return questionObjects;
}

export default class QuestionnaireClient {
    constructor({ accessToken, sheetUrl }) {
        this.sheetUrl = sheetUrl;
        this.accessToken = accessToken;
    }

    getCandidates() {
        return getSpreadsheetData({})
            .then(parseSpreadsheetData)
            .then(mapCandidates);
    }

    getQuestions() {
        return getSpreadsheetData({
                range: "Questions!A1:AA500",
            })
            .then(parseSpreadsheetData)
            .then(mapQuestions);
    }
}
