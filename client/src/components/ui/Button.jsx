import './ui.css';

function Button({ text, onClick, type = 'button', variant = 'primary', disabled = false }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;