import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found container">
      <span className="not-found__code">404</span>
      <h1>This page took a wrong turn.</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/"><Button variant="accent">Back to home</Button></Link>
    </div>
  );
}

export default NotFound;