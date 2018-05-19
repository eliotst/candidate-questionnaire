import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";

export default function CandidateIcon({ candidate, iconClass, setCurrentCandidate }) {
    const onClick = () => setCurrentCandidate(candidate);
    const iconStyle = {
        backgroundImage: `url(${candidate.imageUrl})`,
    };
    return (
        <div className={`candidate-icon ${iconClass}`}>
            <button className="icon" onClick={onClick} style={iconStyle} />
        </div>
    );
}

CandidateIcon.propTypes = {
    candidate: propTypes.candidate.isRequired,
    iconClass: PropTypes.string.isRequired,
    setCurrentCandidate: PropTypes.func.isRequired,
};
