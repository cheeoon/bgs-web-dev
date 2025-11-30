import styles from './LogoutButton.module.scss';

interface LogoutButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const LogoutButton = ({
  onClick,
  size = 'md',
  fullWidth = false,
}: LogoutButtonProps) => {
  const classNames = [
    styles.button,
    styles[size], // assumes you have .sm, .md, .lg in SCSS
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button onClick={onClick} className={classNames}>
      Logout
    </button>
  );
};

export default LogoutButton;
