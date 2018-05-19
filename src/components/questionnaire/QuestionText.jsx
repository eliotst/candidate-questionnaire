import PropTypes from "prop-types";
import React from "react";

export default function QuestionText({ text }) {
    return (
        <div className="question-text">
            {text}
        </div>
    );
}

QuestionText.propTypes = {
    text: PropTypes.string.isRequired,
};
