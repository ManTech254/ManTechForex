
import { useState } from "react";
import {
  Activity,
  Mail,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password reset email will be handled by the backend later.
    setSubmitted(true);
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
        {submitted ? (
          <div className="reset-success">
            <span className="success-icon">
              <CheckCircle size={34} />
            </span>

            <h1>Check your email</h1>

            <p>
              If an account exists for <strong>{email}</strong>, you will
              receive instructions to reset your password.
            </p>

            <button
              type="button"
              className="auth-submit"
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
            >
              <span>Try another email</span>
            </button>
          </div>
        ) : (
          <>
            <a href="/login" className="auth-back-link">
              <ArrowLeft size={17} />
              <span>Back to login</span>
            </a>

            <div className="auth-heading">
              <span className="auth-badge">ACCOUNT RECOVERY</span>
              <h1>Forgot password?</h1>
              <p>
                No worries. Enter the email address associated with your
                account and we'll help you reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="resetEmail">Email address</label>

                <div className="input-wrapper">
                  <Mail size={19} />

                  <input
                    id="resetEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="auth-submit">
                <span>Send reset instructions</span>
                <ArrowRight size={19} />
              </button>
            </form>

            <p className="auth-switch">
              Remember your password? <a href="/login">Log in</a>
            </p>
          </>
        )}
      </section>

      <p className="auth-footer">
        © {new Date().getFullYear()} ManTechForex. All rights reserved.
      </p>
    </main>
  );
}

export default ForgotPassword;
