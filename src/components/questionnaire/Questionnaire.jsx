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
    if (currentCandidate === null && (currentDistrict === null)) {
        return null;
    }
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
            {questionnaireComponent}
        </div>
    );
}

Questionnaire.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentCandidate: propTypes.candidate,
    currentDistrict: PropTypes.string,
    questions: PropTypes.arrayOf(propTypes.question).isRequired,
};

Questionnaire.defaultProps = {
    currentCandidate: null,
    currentDistrict: null,
};
