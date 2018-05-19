import PropTypes from "prop-types";
import React from "react";

import Answer from "./Answer";
import QuestionText from "./QuestionText";
import propTypes from "../prop-types";
import CandidateIcons from "./CandidateIcons";

export default function QuestionBlock({ candidates }) {
    return (
        <div className="question-block">
            <QuestionText />
            <CandidateIcons />
            <Answer />
        </div>
    );
}

QuestionBlock.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
};

