import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './backdrop.css';

function Backdrop({ zIndex, onClick, className }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) onClick();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClick]);

  return (
    <div
      id="backdrop"
      style={zIndex ? { zIndex } : null}
      onClick={onClick}
      role="presentation"
      tabIndex={-1}
      aria-label="Backdrop"
      className={className || null}
    />
  );
}

Backdrop.propTypes = {
  zIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Backdrop;
