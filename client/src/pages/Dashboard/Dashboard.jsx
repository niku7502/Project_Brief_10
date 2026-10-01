import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" subtitle="Overview of your activity" />
      <CardGrid>
        <Card title="Statistics" description="Summary information will appear here." />
        <Card title="Recent Activity" description="No recent activity yet." />
        <Card title="Messages" description="You have no new messages." />
        <Card title="Quick Actions" description="Common tasks in one place.">
          <div className="button-row">
            <Button text="Refresh" onClick={() => console.log('Refreshed')} />
            <Button text="Settings" variant="secondary" />
          </div>
        </Card>
      </CardGrid>
    </div>
  );
}

export default Dashboard;