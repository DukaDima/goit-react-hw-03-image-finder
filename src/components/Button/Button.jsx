import React from 'react';
import '../../components/styles.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className="buttonContainer">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
