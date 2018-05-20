import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

const isQuestionRelevant = (question, relevantCandidateNames) => {
    const relevantAnswers = question.answers.filter(answer =>
        relevantCandidateNames.indexOf(answer.candidate) !== -1);
    return relevantAnswers.length > 0;
};

export default function District({ currentDistrict, candidates, questions }) {
    const relevantCandidates = candidates.filter(candidate =>
        candidate.district === currentDistrict.id);
    const relevantCandidateNames = relevantCandidates.map(candidate => candidate.name);
    const relevantQuestions = questions.filter(question =>
        isQuestionRelevant(question, relevantCandidateNames));
    const questionBlocks = relevantQuestions.map(question =>
        <QuestionBlock key={question.text} question={question} candidates={relevantCandidates} />);
    return (
        <div>
            {questionBlocks}
        </div>
    );
}

District.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentDistrict: propTypes.district.isRequired,
    questions: PropTypes.arrayOf(propTypes.question).isRequired,
};
