import './Loader.css';

function Loader({ label = 'Loading' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__bar" />
      <span className="loader__label">{label}</span>
    </div>
  );
}

export default Loader;