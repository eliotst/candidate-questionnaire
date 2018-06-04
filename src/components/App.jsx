import React from "react";
import { Route } from "react-router-dom";

import CandidateQuestionnaire from "./questionnaire/CandidateQuestionnaire";
import DistrictClient from "../clients/district";
import DistrictPicker from "./district/DistrictPicker";
import DistrictQuestionnaire from "./questionnaire/DistrictQuestionnaire";
import QuestionnaireClient from "../clients/questionnaire";

import "../stylesheets/questionnaire.scss";

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
        this.state = {
            candidates: null,
            error: null,
            questions: null,
        };
        this.questionnaireClient = new QuestionnaireClient({});
        this.districtClient = new DistrictClient({});
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

    render() {
        const {
            candidates,
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
                <Route
                    path="/"
                    exact
                    render={props =>
                        (<DistrictPicker
                            districts={relevantDistricts}
                            {...props}
                        />)
                    }
                />
                <Route
                    path="/district/:currentDistrict"
                    exact
                    render={props =>
                        (
                            <div>
                                <DistrictPicker
                                    districts={relevantDistricts}
                                    {...props}
                                />
                                <DistrictQuestionnaire
                                    candidates={candidates}
                                    questions={questions}
                                    {...props}
                                />
                            </div>
                        )
                    }
                />
                <Route
                    path="/candidate/:currentCandidate"
                    render={props =>
                        (<CandidateQuestionnaire
                            candidates={candidates}
                            questions={questions}
                            {...props}
                        />)
                    }
                />
            </div>
        );
    }
}
