import React from 'react';
import './SubmitButton.css';

interface SubmitButtonProps {
  text?: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const SubmitButton = ({
  text = 'Submit',
  onClick,
  disabled = false,
}: SubmitButtonProps) => {
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
