import PropTypes from "prop-types";
import React from "react";

import Candidate from "./Candidate";
import District from "./District";
import propTypes from "../prop-types";

export default function Questionnaire({
    candidates,
    currentDistrict,
    currentCandidate,
    questions,
}) {
    const questionnaireComponent = currentCandidate ?
        <Candidate currentCandidate={currentCandidate} questions={questions} /> :
        (
            <District
                candidates={candidates}
                currentDistrict={currentDistrict}
                questions={questions}
            />
        );
    return (
        <div className="questionnaire">
            <div className="instructions">Click on the picture of a candidate to see their answer.</div>
            {questionnaireComponent}
        </div>
    );
}

Questionnaire.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentCandidate: propTypes.candidate,
    currentDistrict: propTypes.district,
    questions: PropTypes.arrayOf(propTypes.question).isRequired,
};

Questionnaire.defaultProps = {
    currentCandidate: null,
    currentDistrict: null,
};
