import './Button.css';

function Button({ children, variant = 'primary', type = 'button', onClick, disabled, full }) {
  const classes = [
    'btn',
    `btn--${variant}`,
    full ? 'btn--full' : '',
  ].join(' ').trim();

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;