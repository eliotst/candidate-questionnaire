import React from "react";

import propTypes from "../prop-types";

export default function Answer({ answer }) {
    if (answer === null) {
        return null;
    }
    return (
        <div className="answer">
            <div className="answer-header">
                <div className="close">x</div>
                <div className="candidate-name">{answer.candidate}</div>
            </div>
            <div className="answer-text">
                <p>
                    {answer.answer}
                </p>
            </div>
        </div>
    );
}

Answer.propTypes = {
    answer: propTypes.answer,
};

Answer.defaultProps = {
    answer: null,
};
