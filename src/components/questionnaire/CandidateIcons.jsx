import PropTypes from "prop-types";
import React from "react";

import CandidateIcon from "./CandidateIcon";
import propTypes from "../prop-types";

export default function CandidateIcons({ candidates, setCurrentCandidate }) {
    const icons = candidates.map(candidate =>
        <CandidateIcon key={candidate.name} candidate={candidate} setCurrentCandidate={setCurrentCandidate} />);
    return (
        <div className="candidate-icons">
            {icons}
        </div>
    );
}

CandidateIcons.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    setCurrentCandidate: PropTypes.func.isRequired,
};
