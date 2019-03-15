import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";

export default function CandidateIcon({
    candidate, iconClass, numberOfCandidates, setCurrentCandidate,
}) {
    const onClick = () => setCurrentCandidate(candidate);
    const candidateWidth = Math.max(100 / numberOfCandidates, 20) - 2;
    const iconStyle = {
        backgroundImage: `url(${candidate.imageUrl})`,
    };
    const candidateIconStyle = {
        width: `${candidateWidth}%`,
    };
    return (
        <div className={`candidate-icon ${iconClass}`} style={candidateIconStyle}>
            <button className="icon" onClick={onClick} style={iconStyle} />
        </div>
    );
}

CandidateIcon.propTypes = {
    candidate: propTypes.candidate.isRequired,
    iconClass: PropTypes.string.isRequired,
    numberOfCandidates: PropTypes.number.isRequired,
    setCurrentCandidate: PropTypes.func.isRequired,
};
