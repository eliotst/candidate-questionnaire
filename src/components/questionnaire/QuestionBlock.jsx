import PropTypes from "prop-types";
import React from "react";

import Answer from "./Answer";
import QuestionText from "./QuestionText";
import propTypes from "../prop-types";
import CandidateIcons from "./CandidateIcons";

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCandidate: props.currentCandidate,
        };
        this.setCurrentCandidate = this.setCurrentCandidate.bind(this);
    }

    setCurrentCandidate(candidate) {
        const { currentCandidate } = this.state;
        if (currentCandidate !== null && currentCandidate.name === candidate.name) {
            this.setState({
                currentCandidate: null,
            });
        } else {
            this.setState({
                currentCandidate: candidate,
            });
        }
    }

    render() {
        const { currentCandidate } = this.state;
        const { question, candidates } = this.props;
        const currentAnswer = question.answers.filter(answer =>
            currentCandidate !== null && answer.candidate === currentCandidate.name)[0];
        return (
            <div className="question-block">
                <QuestionText text={question.text} />
                {candidates.length > 1 ?
                    <CandidateIcons
                        candidates={candidates}
                        currentCandidate={currentCandidate}
                        setCurrentCandidate={this.setCurrentCandidate}
                    /> : null}
                <Answer answer={currentAnswer} />
            </div>
        );
    }
}

QuestionBlock.propTypes = {
    candidates: PropTypes.arrayOf(propTypes.candidate).isRequired,
    currentCandidate: propTypes.candidate,
    question: propTypes.question.isRequired,
};

QuestionBlock.defaultProps = {
    currentCandidate: null,
};
