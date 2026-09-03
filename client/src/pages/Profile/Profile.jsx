import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './Profile.css';

function Profile() {
  return (
    <div className="profile container">
      <h1>Profile</h1>
      <p>Manage your account details and rental preferences.</p>

      <Card className="profile__card">
        <div className="profile__row">
          <span className="profile__label">Name</span>
          <span>Nikumani Pathak</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Email</span>
          <span>nikumani@rentease.com</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Role</span>
          <span>Administrator</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Member since</span>
          <span>August 2026</span>
        </div>

        <Button variant="ghost">Edit profile</Button>
      </Card>
    </div>
  );
}

export default Profile;