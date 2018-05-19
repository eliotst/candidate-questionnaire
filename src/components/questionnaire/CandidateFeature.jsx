import React from "react";

import CandidateDetails from "./CandidateDetails";
import propTypes from "../prop-types";

export default function CandidateFeature({ candidate }) {
    return (
        <div className="candidate-feature">
            <h2>{candidate.name}</h2>
            <CandidateDetails candidate={candidate} />
        </div>
    );
}

CandidateFeature.propTypes = {
    candidate: propTypes.candidate.isRequired,
};
