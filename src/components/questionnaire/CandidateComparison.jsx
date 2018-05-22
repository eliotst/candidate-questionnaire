import PropTypes from "prop-types";
import React from "react";

import CandidateDetails from "./CandidateDetails";
import propTypes from "../prop-types";

export default function CandidateComparison({ candidates }) {
    const details = candidates.map(candidate =>
        <CandidateDetails key={candidate.name} candidate={candidate} />);
    return (
        <ul className="candidate-comparison">
            {details}
        </ul>
    );
}

CandidateComparison.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
};
