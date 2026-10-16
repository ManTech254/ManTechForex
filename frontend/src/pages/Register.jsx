
import { useState } from "react";
import {
  Activity,
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // We will connect registration to the backend later.
    console.log({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <main className="auth-page">
      <a href="/" className="brand auth-brand">
        <span className="brand-icon">
          <Activity size={26} strokeWidth={2.5} />
        </span>

        <span className="brand-name">
          ManTech<span>Forex</span>
        </span>
      </a>

      <section className="auth-card">
        <div className="auth-heading">
          <span className="auth-badge">JOIN MANTECHFOREX</span>
          <h1>Create your account</h1>
          <p>
            Start learning about forex markets and build your trading
            knowledge.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>

            <div className="input-wrapper">
              <User size={19} />

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="registerEmail">Email address</label>

            <div className="input-wrapper">
              <Mail size={19} />

              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>

            <div className="input-wrapper">
              <LockKeyhole size={19} />

              <input
                id="registerPassword"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>

            <div className="input-wrapper">
              <LockKeyhole size={19} />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {error && <p className="form-error" role="alert">{error}</p>}

          <button type="submit" className="auth-submit">
            <span>Create Account</span>
            <ArrowRight size={19} />
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <a href="/login">Log in</a>
        </p>

        <p className="auth-disclaimer">
          Forex trading involves risk. Learn the fundamentals before trading.
        </p>
      </section>

      <p className="auth-footer">
        © {new Date().getFullYear()} ManTechForex. All rights reserved.
      </p>
    </main>
  );
}

export default Register;
