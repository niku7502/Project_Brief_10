import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" subtitle="Manage your account details" />
      <CardGrid>
        <Card title="User Information" description="Your profile details will appear here.">
          <Button text="Edit Profile" />
        </Card>
        <Card title="Booking History" description="Your past rentals will appear here." />
      </CardGrid>
    </div>
  );
}

export default Profile;