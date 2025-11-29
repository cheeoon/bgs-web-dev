import React from 'react';
import './RegisterButton.css';

interface RegisterButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({
  onClick,
  size = 'md',
  fullWidth = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`register-button ${size} ${fullWidth ? 'full-width' : ''}`}
    >
      Register Now
    </button>
  );
};

export default RegisterButton;
