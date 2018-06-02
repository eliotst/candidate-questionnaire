import React from "react";

import DistrictClient from "../clients/district";
import DistrictPicker from "./district/DistrictPicker";
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

const getRelevantDistricts = (candidates) => {
    const candidateDistricts = candidates.reduce((acc, candidate) => {
        acc[candidate.district] = true;
        return acc;
    }, {});
    return Object.keys(candidateDistricts);
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const currentDistrictParameter = getQueryParameter("district") || null;
        this.state = {
            candidates: null,
            currentDistrict: currentDistrictParameter,
            currentCandidate: null,
            error: null,
            questions: null,
        };
        this.questionnaireClient = new QuestionnaireClient({});
        this.districtClient = new DistrictClient({});
        this.setCurrentDistrict = this.setCurrentDistrict.bind(this);
    }

    componentDidMount() {
        // const currentCandidateParameter = getQueryParameter("candidate");
        this.questionnaireClient.getCandidates()
            .then(candidates => this.setState({ candidates }))
            .catch(error => this.setState({ error }));
        this.questionnaireClient.getQuestions()
            .then(questions => this.setState({ questions }))
            .catch(error => this.setState({ error }));
    }

    setCurrentDistrict(district) {
        const { currentDistrict } = this.state;
        if (currentDistrict === district) {
            return this.setState({ currentDistrict: null });
        }
        return this.setState({
            currentDistrict: district,
        });
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
        if (questions === null || candidates === null) {
            return (
                <div>Loading ...</div>
            );
        }
        const relevantDistricts = getRelevantDistricts(candidates);
        return (
            <div>
                <DistrictPicker
                    currentDistrict={currentDistrict}
                    districts={relevantDistricts}
                    onSelectDistrict={this.setCurrentDistrict}
                />
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
