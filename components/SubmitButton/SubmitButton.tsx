import React from 'react';
import './SubmitButton.css';

interface SubmitButtonProps {
  text?: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = 'Submit',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="submit-button"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
