import PropTypes from "prop-types";
import React from "react";

import CandidateQuestionnaire from "./questionnaire/CandidateQuestionnaire";
import DistrictPicker from "./district/DistrictPicker";

export default function Index({ match, questionnaireClient }) {
    const relevantDistricts = questionnaireClient.getReleventDistricts();
    return <DistrictPicker districts={relevantDistricts} match={match} />;
}

Index.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            currentDistrict: PropTypes.string,
        }).isRequired,
    }).isRequired,
    questionnaireClient: PropTypes.instanceOf(CandidateQuestionnaire).isRequired,
};
