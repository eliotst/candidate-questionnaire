import PropTypes from "prop-types";
import React from "react";

import CandidateFeature from "./CandidateFeature";
import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

const isQuestionRelevant = (question, currentCandidate) => {
    const relevantAnswers = question.answers.filter(answer =>
        answer.candidate === currentCandidate);
    return relevantAnswers.length > 0;
};

export default function CandidateQuestionnaire({ candidates, match, questions }) {
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

CandidateQuestionnaire.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            currentDistrict: PropTypes.string,
        }).isRequired,
    }).isRequired,
    questions: PropTypes.arrayOf(propTypes.question).isRequired,
};
