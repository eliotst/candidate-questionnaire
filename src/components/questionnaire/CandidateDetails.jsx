import React from "react";

import propTypes from "../prop-types";

function generateFacebookLink(facebookId) {
    return `https://www.facebook.com/${facebookId}`;
}

function generateAllLinks(candidate) {
    const result = [];
    if (candidate.website) {
        result.push({
            name: "Website",
            url: candidate.website,
        });
    }
    if (candidate.facebookId) {
        result.push({
            name: "Facebook",
            url: generateFacebookLink(candidate.facebookId),
        });
    }
    if (candidate.sponsoredLegislation) {
        result.push({
            name: "Sponsored Legislation",
            url: candidate.sponsoredLegislation,
        });
    }
    return result;
}

export default function CandidateDetails({ candidate }) {
    const candidateImage = {
        backgroundImage: `url(${candidate.imageUrl})`,
    };
    const externalLinks = generateAllLinks(candidate).map(link =>
        <li key={link.name}><a href={link.url}>{link.name}</a></li>);
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

