import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button type="button" data-name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" data-name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" data-name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  // options.PropTypes
  onLeaveFeedback: PropTypes.func.isRequired,
};
