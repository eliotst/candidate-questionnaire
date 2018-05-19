import React from "react";

import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

export default function Candidate({ currentCandidate }) {
    const candidates = [currentCandidate];
    return (
        <div>
            <QuestionBlock candidates={candidates} />
            <QuestionBlock candidates={candidates} />
            <QuestionBlock candidates={candidates} />
            <QuestionBlock candidates={candidates} />
        </div>
    );
}

Candidate.propTypes = {
    currentCandidate: propTypes.candidate.isRequired,
};

