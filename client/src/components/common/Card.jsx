import './Card.css';

function Card({ children, variant = 'default', className = '' }) {
  return (
    <div className={`card card--${variant} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;