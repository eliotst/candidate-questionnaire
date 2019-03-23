import PropTypes from "prop-types";
import React from "react";

import CandidateFeature from "./CandidateFeature";
import QuestionBlock from "./QuestionBlock";
import QuestionnaireClient from "../../clients/questionnaire";

const isQuestionRelevant = (question, currentCandidate) => {
    const relevantAnswers = question.answers.filter(answer =>
        answer.candidate === currentCandidate);
    return relevantAnswers.length > 0;
};

export default class CandidateQuestionnaire extends React.Component {
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
        const { candidates, error, questions } = this.state;
        const { match } = this.props;
        if (error !== null) {
            return <div>{error}</div>;
        }
        if (candidates === null || questions === null) {
            return (
                <div>Loading ...</div>
            );
        }
        const { currentCandidate = null } = match.params;
        const matchingCandidate = candidates.filter(candidate => candidate.name === currentCandidate);
        const relevantQuestions = questions.filter(question =>
            isQuestionRelevant(question, currentCandidate));
        const questionBlocks = relevantQuestions.map(question =>
            (<QuestionBlock
                key={question.text}
                currentCandidate={matchingCandidate[0]}
                question={question}
                candidates={matchingCandidate}
            />));
        return (
            <div className="questionnaire">
                <CandidateFeature candidate={matchingCandidate[0]} />
                <div className="instructions">Click on the picture of a candidate to see their answer.</div>
                {questionBlocks}
            </div>
        );
    }
}

CandidateQuestionnaire.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            currentDistrict: PropTypes.string,
        }).isRequired,
    }).isRequired,
    questionnaireClient: PropTypes.instanceOf(QuestionnaireClient).isRequired,
};
