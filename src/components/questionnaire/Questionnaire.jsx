import PropTypes from "prop-types";
import React from "react";

import Candidate from "./Candidate";
import District from "./District";
import propTypes from "../prop-types";
import QuestionnaireClient from "../../clients/questionnaire";

export default function Questionnaire({ client, currentDistrict, currentCandidate }) {
    const candidates = client.getCandidates();
    const questionnaireComponent = currentDistrict ?
        <District currentDistrict={currentDistrict} candidates={candidates} /> :
        <Candidate currentCandidate={currentCandidate} />;
    return (
        <div className="questionnaire">
            <div className="instructions">Click on the picture of a candidate to see their answer.</div>
            {questionnaireComponent}
        </div>
    );
}

Questionnaire.propTypes = {
    client: PropTypes.instanceOf(QuestionnaireClient).isRequired,
    currentCandidate: PropTypes.arrayOf(propTypes.candidate),
    currentDistrict: PropTypes.arrayOf(propTypes.district),
};

Questionnaire.defaultProps = {
    currentCandidate: null,
    currentDistrict: null,
};
