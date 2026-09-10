import PageTitle from "../../components/ui/PageTitle";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <PageTitle title="My Profile" subtitle="Manage your account details" />
      <div className="profile-card">
        {/* existing profile fields */}
      </div>
    </div>
  );
}

export default Profile;