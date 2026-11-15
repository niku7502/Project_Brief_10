import './ui.css';

function WelcomeBanner({ title, name, message }) {
  return (
    <div className="welcome-banner">
      <h2>{title}, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default WelcomeBanner;