import React from "react";

import propTypes from "../prop-types";

function generateFacebookLink(facebookId) {
    return `https://www.facebook.com/${facebookId}`;
}

export default function CandidateDetails({ candidate }) {
    return (
        <li className="candidate-details">
            <div className="image">
                <img src={candidate.imageUrl} />
            </div>
            <div className="name">{candidate.name}</div>
            <div className="party">{candidate.party}</div>
            <div className="candidate-type">{candidate.candidateType}</div>
            <ul className="external-links">
                <li>
                    <a href={candidate.website}>Website</a>
                </li>
                <li>
                    <a href={generateFacebookLink(candidate.facebookId)}>Facebook Page</a>
                </li>
            </ul>
        </li>
    );
}

CandidateDetails.propTypes = {
    candidate: propTypes.candidate.isRequired,
};

