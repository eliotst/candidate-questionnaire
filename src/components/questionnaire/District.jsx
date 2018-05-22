import PropTypes from "prop-types";
import React from "react";

import CandidateComparison from "./CandidateComparison";
import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

const isQuestionRelevant = (question, relevantCandidateNames) => {
    const relevantAnswers = question.answers.filter(answer =>
        relevantCandidateNames.indexOf(answer.candidate) !== -1);
    return relevantAnswers.length > 0;
};

export default function District({ currentDistrict, candidates, questions }) {
    const relevantCandidates = candidates.filter(candidate =>
        candidate.district === currentDistrict);
    const relevantCandidateNames = relevantCandidates.map(candidate => candidate.name);
    const relevantQuestions = questions.filter(question =>
        isQuestionRelevant(question, relevantCandidateNames));
    const questionBlocks = relevantQuestions.map(question =>
        <QuestionBlock key={question.text} question={question} candidates={relevantCandidates} />);
    return (
        <div>
            <CandidateComparison candidates={relevantCandidates} />
            <div className="instructions">Click on the picture of a candidate to see their answer.</div>
            {questionBlocks}
        </div>
    );
}

District.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentDistrict: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(propTypes.question).isRequired,
};
