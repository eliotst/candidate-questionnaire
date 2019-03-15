import React from "react";
import { Route } from "react-router-dom";

import CandidateQuestionnaire from "./questionnaire/CandidateQuestionnaire";
import DistrictPicker from "./district/DistrictPicker";
import DistrictQuestionnaire from "./questionnaire/DistrictQuestionnaire";
import QuestionnaireClient from "../clients/questionnaire";

import "../stylesheets/questionnaire.scss";
import loadConfig from "../config";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            districts: null,
            error: null,
        };
        this.config = loadConfig({});
        this.questionnaireClient = new QuestionnaireClient(this.config);
    }

    componentDidMount() {
        // const currentCandidateParameter = getQueryParameter("candidate");
        this.questionnaireClient.getRelevantDistricts()
            .then(districts => this.setState({ districts }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const {
            districts,
            error,
        } = this.state;
        const { supportSearch } = this.config;
        if (error !== null) {
            return <div>{error}</div>;
        }
        if (districts === null) {
            return (
                <div>Loading ...</div>
            );
        }
        return (
            <div>
                <Route
                    path="/"
                    exact
                    render={props =>
                        (<DistrictPicker
                            districts={districts}
                            supportSearch={supportSearch}
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
                                    districts={districts}
                                    supportSearch={supportSearch}
                                    {...props}
                                />
                                <DistrictQuestionnaire
                                    questionnaireClient={this.questionnaireClient}
                                    {...props}
                                />
                            </div>
                        )
                    }
                />
                <Route
                    path="/district/:currentDistrict/candidate/:currentCandidate"
                    exact
                    render={props =>
                        (<CandidateQuestionnaire
                            districts={districts}
                            questionnaireClient={this.questionnaireClient}
                            {...props}
                        />)
                    }
                />
            </div>
        );
    }
}
