import React from 'react';

const Button = ({ onClick, type, alertMessage, children }) => {
  let buttonStyle = {};

  // Different styling based on the button type
  if (type === 'primary') {
    buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
    };
  } else if (type === 'secondary') {
    buttonStyle = {
      backgroundColor: 'gray',
      color: 'white',
    };
  }

  // Handle click event inside the component
  const handleClickInside = () => {
    if (onClick) {
      onClick();
    }
    if (alertMessage) {
      alert(alertMessage);
    }
  };

  // Render the button with appropriate styling and functionality
  return (
    <button style={buttonStyle} onClick={handleClickInside}>
      {children}
    </button>
  );
};

export default Button;
