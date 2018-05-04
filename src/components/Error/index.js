import React from 'react';
import PropTypes from 'prop-types';

function Error({ text }) {
  return <span className="error">{text}</span>;
}

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
