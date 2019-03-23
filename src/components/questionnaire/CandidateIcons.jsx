import PropTypes from "prop-types";
import React from "react";

import CandidateIcon from "./CandidateIcon";
import propTypes from "../prop-types";

function determineIconClass(currentCandidate, candidate) {
    if (currentCandidate === null) {
        return "";
    } else if (currentCandidate.name === candidate.name) {
        return "current";
    }
    return "not-current";
}

export default function CandidateIcons({ candidates, currentCandidate, setCurrentCandidate }) {
    const numberOfCandidates = candidates.length;
    const icons = candidates.map(candidate =>
        (<CandidateIcon
            key={candidate.name}
            candidate={candidate}
            iconClass={determineIconClass(currentCandidate, candidate)}
            numberOfCandidates={numberOfCandidates}
            setCurrentCandidate={setCurrentCandidate}
        />));
    return (
        <div className="candidate-icons">
            {icons}
        </div>
    );
}

CandidateIcons.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentCandidate: propTypes.candidate,
    setCurrentCandidate: PropTypes.func.isRequired,
};

CandidateIcons.defaultProps = {
    currentCandidate: null,
};

