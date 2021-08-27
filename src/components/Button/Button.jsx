import React from 'react';
import '../../components/styles.css';
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default Button;
