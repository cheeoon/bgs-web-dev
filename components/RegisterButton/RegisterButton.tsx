import './RegisterButton.css';

// Also known as signup button

interface RegisterButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const RegisterButton = ({
  onClick,
  size = 'md',
  fullWidth = false,
}: RegisterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`register-button ${size} ${fullWidth ? 'full-width' : ''}`}
    >
      Register Now / Login
    </button>
  );
};

export default RegisterButton;
