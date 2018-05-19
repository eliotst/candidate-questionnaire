import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";

export default function DistrictCandidatePageLinks({ candidates }) {
    const candidateLinks = candidates.map(candidate =>
        <li key={candidate.name}><Link to={`/candidate/${candidate.name}`}>{candidate.name}</Link></li>);
    return (
        <div className="candidate-links">
            <div className="description">
                Click on a link below to see all of the answers for a particular candidate:
            </div>
            <ul className="candidate-links-list">
                {candidateLinks}
            </ul>
        </div>
    );
}

DistrictCandidatePageLinks.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
};

