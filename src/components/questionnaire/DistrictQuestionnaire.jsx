import PropTypes from "prop-types";
import React from "react";

import CandidateComparison from "./CandidateComparison";
import DistrictCandidatePageLinks from "./DistrictCandidatePageLinks";
import QuestionBlock from "./QuestionBlock";
import QuestionnaireClient from "../../clients/questionnaire";

const isQuestionRelevant = (question, relevantCandidateNames) => {
    const relevantAnswers = question.answers.filter(answer =>
        relevantCandidateNames.indexOf(answer.candidate) !== -1);
    return relevantAnswers.length > 0;
};

export default class DistrictQuestionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: null,
            error: null,
            questions: null,
        };
    }

    componentDidMount() {
        const { match, questionnaireClient } = this.props;
        const { params } = match;
        const { currentDistrict } = params;
        questionnaireClient.getCandidates(currentDistrict)
            .then(candidates => this.setState({ candidates }))
            .catch(error => this.setState({ error }));
        questionnaireClient.getQuestions(currentDistrict)
            .then(questions => this.setState({ questions }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const { match } = this.props;
        const { candidates, error, questions } = this.state;
        if (error !== null) {
            return <div>{error}</div>;
        }
        if (candidates === null || questions === null) {
            return (
                <div>Loading ...</div>
            );
        }
        const { currentDistrict = null } = match.params;
        const relevantCandidates = candidates.filter(candidate =>
            candidate.district === currentDistrict);
        const relevantCandidateNames = relevantCandidates.map(candidate => candidate.name);
        const relevantQuestions = questions.filter(question =>
            isQuestionRelevant(question, relevantCandidateNames));
        const questionBlocks = relevantQuestions.map(question => (
            <QuestionBlock
                key={question.text}
                question={question}
                candidates={relevantCandidates}
            />));
        return (
            <div className="questionnaire">
                <CandidateComparison candidates={relevantCandidates} />
                <div className="instructions">Click on the picture of a candidate to see their answer.</div>
                {questionBlocks}
                {relevantCandidates.length > 1 ?
                    <DistrictCandidatePageLinks candidates={relevantCandidates} /> : null}
            </div>
        );
    }
}

DistrictQuestionnaire.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            currentDistrict: PropTypes.string,
        }).isRequired,
    }).isRequired,
    questionnaireClient: PropTypes.instanceOf(QuestionnaireClient).isRequired,
};
