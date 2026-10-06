import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" subtitle="Overview of your rental activity" />
      <CardGrid>
        <Card title="Active Rentals" description="Vehicles currently on the road." />
        <Card title="Available Vehicles" description="Ready to be booked right now." />
        <Card title="Pending Payments" description="Bookings waiting for payment." />
        <Card title="Quick Actions" description="Common tasks in one place.">
          <div className="button-row">
            <Button text="New booking" />
            <Button text="Refresh" variant="secondary" />
          </div>
        </Card>
      </CardGrid>
    </div>
  );
}

export default Dashboard;