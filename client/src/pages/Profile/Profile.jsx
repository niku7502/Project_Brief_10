import { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import WelcomeBanner from '../../components/ui/WelcomeBanner';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  return (
    <div>
      <PageTitle title="Profile" subtitle="Manage your account details" />

      {isLoggedIn ? (
        <WelcomeBanner
          title="Welcome back"
          name={name || 'Guest'}
          message="You are logged in."
        />
      ) : (
        <WelcomeBanner
          title="Hello"
          name="Visitor"
          message="Please log in to see your profile."
        />
      )}

      <CardGrid>
        <Card title="Account Status">
          <p className={isLoggedIn ? 'status-in' : 'status-out'}>
            {isLoggedIn ? 'Logged In' : 'Logged Out'}
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Button
              text={isLoggedIn ? 'Log out' : 'Log in'}
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            />
          </div>
        </Card>

        <Card title="Display Name" description="Type your name and watch the banner change.">
          <input
            className="input-field"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Card>
      </CardGrid>
    </div>
  );
}

export default Profile;