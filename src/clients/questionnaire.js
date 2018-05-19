const defaultSheetUrl = "https://docs.google.com/spreadsheets/d/1EYBBLTLXT5BbbDalENOaIQNIWBpkYrNxc64sETH7X6E/edit?usp=sharing";

export default class QuestionnaireClient {
    constructor({ accessToken, sheetUrl }) {
        this.sheetUrl = sheetUrl;
        this.accessToken = accessToken;
    }

    getCandidates() {
        return [
            {
                name: "Steven Mentzer",
                district: "ocd-division/country:us/state:pa/sldl:97",
                party: "Republican",
                candidateType: "Incumbent",
                writeIn: false,
                imageUrl: "http://foo.com/scott.jpg",
                website: "http://www.legis.state.pa.us/cfdocs/legis/home/member_information/representatives_alpha.cfm",
                facebookId: "RepMentzer",
            },
            {
                name: "Dana Hamp-Gulick",
                district: "ocd-division/country:us/state:pa/sldl:97",
                party: "Democrat",
                candidateType: "Challenger",
                writeIn: false,
                imageUrl: "http://foo.com/dana.jpg",
                website: "https://www.dana4pa97.com/",
                facebookId: "Dana4PA97",
            },
        ];
    }

    getQuestions() {
        return [
            {
                candidate: "Scott Mentzer",
                text: "Do you like ice cream?",
                answer: "No",
            },
            {
                candidate: "Dana Hamp-Gulick",
                text: "Do you like ice cream?",
                answer: "Yes",
            },
        ];
    }
}
