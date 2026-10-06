import { Link } from 'react-router-dom';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';

function NotFound() {
  return (
    <div>
      <PageTitle title="404 - Page Not Found" />
      <Card description="The page you are looking for does not exist.">
        <Link to="/">Go back Home</Link>
      </Card>
    </div>
  );
}

export default NotFound;