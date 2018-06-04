import React from "react";

import propTypes from "../prop-types";

function generateFacebookLink(facebookId) {
    return `https://www.facebook.com/${facebookId}`;
}

function generateAllLinks(candidate) {
    const result = [];
    if (candidate.website) {
        result.push(<a href={candidate.website}>Website</a>);
    }
    if (candidate.facebookId) {
        result.push(<a href={generateFacebookLink(candidate.facebookId)}>Facebook</a>);
    }
    if (candidate.sponsoredLegislation) {
        result.push(<a href={candidate.sponsoredLegislation}>Sponsored Legislation</a>);
    }
    return result;
}

export default function CandidateDetails({ candidate }) {
    const candidateImage = {
        backgroundImage: `url(${candidate.imageUrl})`,
    };
    const externalLinks = generateAllLinks(candidate).map(link =>
        <li key={candidate.name}>{link}</li>);
    return (
        <li className="candidate-details">
            <div className="image" style={candidateImage} />
            <div className="name">{candidate.name}</div>
            <div className="party">{candidate.party}</div>
            <div className="candidate-type">{candidate.candidateType}</div>
            {externalLinks.length > 0 ?
                <ul className="external-links">
                    {externalLinks}
                </ul> : null}
        </li>
    );
}

CandidateDetails.propTypes = {
    candidate: propTypes.candidate.isRequired,
};

