import React from "react";

import DistrictClient from "../clients/district";
import Questionnaire from "./questionnaire/Questionnaire";
import QuestionnaireClient from "../clients/questionnaire";

import "../stylesheets/questionnaire.scss";

const getQueryParameter = (key) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i += 1) {
        const pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) === key) {
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: null,
            currentDistrict: null,
            currentCandidate: null,
            error: null,
            questions: null,
        };
        this.questionnaireClient = new QuestionnaireClient({});
        this.districtClient = new DistrictClient({});
    }

    componentDidMount() {
        const currentDistrictParameter = getQueryParameter("district") || "sldu:13";
        // const currentCandidateParameter = getQueryParameter("candidate");
        this.questionnaireClient.getCandidates()
            .then(candidates => this.setState({ candidates }))
            .catch(error => this.setState({ error }));
        this.questionnaireClient.getQuestions()
            .then(questions => this.setState({ questions }))
            .catch(error => this.setState({ error }));
        if (currentDistrictParameter !== undefined) {
            this.districtClient.getDistrict(currentDistrictParameter)
                .then(district => this.setState({ currentDistrict: district }))
                .catch(error => this.setState({ error }));
        }
    }

    render() {
        const {
            candidates,
            currentDistrict,
            currentCandidate,
            error,
            questions,
        } = this.state;
        if (error !== null) {
            return <div>{error}</div>;
        }
        if (questions === null || currentDistrict === null || candidates === null) {
            return (
                <div>Loading ...</div>
            );
        }
        return (
            <div>
                <Questionnaire
                    candidates={candidates}
                    currentDistrict={currentDistrict}
                    currentCandidate={currentCandidate}
                    questions={questions}
                />
            </div>
        );
    }
}
