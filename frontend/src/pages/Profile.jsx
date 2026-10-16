
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  ShieldCheck,
  Wallet,
  Settings,
  Save,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "Demo Trader",
    email: "demo@example.com",
    phone: "",
    country: "Kenya",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Temporary frontend save. Backend integration comes later.
    localStorage.setItem("manTechForexProfile", JSON.stringify(profile));
    setMessage("Profile saved on this device.");
  };

  return (
    <main className="profile-page">
      <header className="profile-page-topbar">
        <Link to="/dashboard" className="profile-page-back">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <Link to="/" className="profile-page-brand">
          <Activity size={25} />
          <span>ManTech<span className="profile-brand-accent">Forex</span></span>
        </Link>

        <span className="profile-page-badge">
          <ShieldCheck size={15} />
          Demo Account
        </span>
      </header>

      <section className="profile-page-content">
        <div className="profile-page-heading">
          <span className="profile-page-eyebrow">ACCOUNT SETTINGS</span>
          <h1>My Profile</h1>
          <p>Manage your personal information and account details.</p>
        </div>

        <div className="profile-layout">
          <aside className="profile-summary-card">
            <div className="profile-large-avatar">
              <UserRound size={42} />
              <span className="profile-camera-icon">
                <Camera size={15} />
              </span>
            </div>

            <h2>{profile.fullName || "Your Name"}</h2>
            <p>{profile.email || "Your email address"}</p>

            <span className="profile-account-status">
              <span />
              Demo Account
            </span>

            <div className="profile-summary-divider" />

            <div className="profile-summary-detail">
              <Wallet size={18} />
              <div>
                <span>Account Type</span>
                <strong>Demo Trading</strong>
              </div>
            </div>

            <div className="profile-summary-detail">
              <ShieldCheck size={18} />
              <div>
                <span>Account Status</span>
                <strong>Frontend Demo</strong>
              </div>
            </div>

            <div className="profile-summary-detail">
              <CalendarDays size={18} />
              <div>
                <span>Member Since</span>
                <strong>Demo account</strong>
              </div>
            </div>
          </aside>

          <section className="profile-details-card">
            <div className="profile-section-heading">
              <div className="profile-section-icon">
                <UserRound size={20} />
              </div>
              <div>
                <h2>Personal Information</h2>
                <p>Update the details displayed on your profile.</p>
              </div>
            </div>

            <form onSubmit={handleSave} className="profile-form">
              <div className="profile-form-grid">
                <label className="profile-field">
                  Full name
                  <div className="profile-input-wrap">
                    <UserRound size={18} />
                    <input
                      type="text"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </label>

                <label className="profile-field">
                  Email address
                  <div className="profile-input-wrap">
                    <Mail size={18} />
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </label>

                <label className="profile-field">
                  Phone number
                  <div className="profile-input-wrap">
                    <Phone size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </label>

                <label className="profile-field">
                  Country
                  <div className="profile-input-wrap">
                    <Settings size={18} />
                    <select
                      name="country"
                      value={profile.country}
                      onChange={handleChange}
                    >
                      <option value="Kenya">Kenya</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className="profile-form-divider" />

              <div className="profile-form-footer">
                <p>
                  Your changes are currently stored locally on this device.
                </p>

                <button type="submit" className="profile-save-button">
                  <Save size={17} />
                  Save Changes
                </button>
              </div>

              {message && (
                <p className="profile-save-message" role="status">
                  {message}
                </p>
              )}
            </form>
          </section>
        </div>

        <footer className="profile-page-footer">
          <span>© {new Date().getFullYear()} ManTechForex</span>
          <span>Manage your account responsibly.</span>
        </footer>
      </section>
    </main>
  );
}

export default Profile;
