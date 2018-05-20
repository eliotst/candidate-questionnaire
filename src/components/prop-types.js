import PropTypes from "prop-types";

const answer = PropTypes.shape({
    candidate: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
});

const district = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
});

const candidate = PropTypes.shape({
    name: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
    candidateType: PropTypes.string.isRequired,
    writeIn: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    facebookId: PropTypes.string.isRequired,
});

const question = PropTypes.shape({
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(answer).isRequired,
});

export default {
    answer,
    candidate,
    district,
    question,
};
