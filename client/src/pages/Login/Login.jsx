import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function Login() {
  return (
    <div style={{ maxWidth: '420px', margin: '0 auto' }}>
      <PageTitle title="Login" />
      <Card title="Sign In" description="The login form will be added in a later sprint.">
        <Button text="Login" type="submit" />
      </Card>
    </div>
  );
}

export default Login;