import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

export default function District({ currentDistrict, candidates, questions }) {
    const relevantCandidates = candidates.filter(candidate =>
        candidate.district === currentDistrict.id);
    const relevantCandidateNames = relevantCandidates.map(candidate => candidate.name);
    const relevantQuestions = questions.filter(question =>
        relevantCandidateNames.indexOf(question.candidate) !== -1);
    const questionBlocks = relevantQuestions.map(question =>
        <QuestionBlock question={question} candidates={relevantCandidates} />);
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
