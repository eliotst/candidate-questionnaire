import PropTypes from "prop-types";
import React from "react";

export default function QuestionText({ text }) {
    const parts = text.split("|");
    if (parts.length === 2) {
        return (
            <div className="question-text">
                <p>{parts[0]}</p>
                <p>{parts[1]}</p>
            </div>
        );
    }
    return (
        <div className="question-text">
            {parts[0]}
        </div>
    );
}

QuestionText.propTypes = {
    text: PropTypes.string.isRequired,
};
