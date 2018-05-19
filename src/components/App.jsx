import React from "react";

import Questionnaire from "./questionnaire/Questionnaire";

import "../stylesheets/questionnaire.scss";
import QuestionnaireClient from "../clients/questionnaire";

export default function () {
    const currentDistrict = "ocd-division/country:us/state:pa/sldu:13";
    const questionnaireClient = new QuestionnaireClient({});
    return (
        <div>
            <Questionnaire client={questionnaireClient} currentDistrict={currentDistrict} />
        </div>
    );
}
