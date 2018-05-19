import PropTypes from "prop-types";
import React from "react";

import propTypes from "../prop-types";
import QuestionBlock from "./QuestionBlock";

export default function District({ currentDistrict, candidates }) {
    return (
        <div>
            <QuestionBlock />
            <QuestionBlock />
            <QuestionBlock />
            <QuestionBlock />
        </div>
    );
}

District.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentDistrict: propTypes.district.isRequired,
};
