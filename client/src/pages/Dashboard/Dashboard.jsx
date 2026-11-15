import { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import WelcomeBanner from '../../components/ui/WelcomeBanner';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Dashboard() {
  const [bookings, setBookings] = useState(0);
  const [notifications, setNotifications] = useState(3);
  const [showDetails, setShowDetails] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div>
      <PageTitle title="Dashboard" subtitle="Overview of your rental activity" />
      <WelcomeBanner
        title="Hello"
        name="Rental Manager"
        message="Here is what is happening with your fleet today."
      />

      <CardGrid>
        <Card title="Bookings Today" description={`Total bookings: ${bookings}`} highlight={bookings > 0}>
          <div className="button-row">
            <Button text="Add booking" onClick={() => setBookings(bookings + 1)} />
            <Button text="Reset" variant="secondary" onClick={() => setBookings(0)} disabled={bookings === 0} />
          </div>
        </Card>

        <Card title="Notifications" description={`You have ${notifications} new notifications.`}>
          <Button text="Mark all as read" onClick={() => setNotifications(0)} disabled={notifications === 0} />
        </Card>

        <Card title="Recent Bookings">
          {bookings > 0 ? (
            <p>You have {bookings} booking(s) to review.</p>
          ) : (
            <p>No bookings yet. Click "Add booking" to create one.</p>
          )}
        </Card>

        <Card title="Fleet Details">
          <Button
            text={showDetails ? 'Hide details' : 'Show details'}
            variant="secondary"
            onClick={() => setShowDetails(!showDetails)}
          />
          {showDetails && <p style={{ marginTop: '0.75rem' }}>29 vehicles in fleet: 14 cars, 9 bikes, 6 SUVs.</p>}
        </Card>
      </CardGrid>

      <div className="section">
        <Card title="Search Vehicles" description="Type to see the state update as you type.">
          <input
            className="input-field"
            type="text"
            placeholder="e.g. Honda City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <p style={{ marginTop: '0.75rem' }}>
            {search ? `You are searching for: ${search}` : 'Start typing to search.'}
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;