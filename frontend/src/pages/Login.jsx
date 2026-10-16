
import { useState } from "react";
import {
  Activity,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  // ADDED 1: Initialize navigation inside the Login component
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Authentication will be connected to the backend later.
    console.log({ email, password, rememberMe });

    // ADDED 2: Redirect to the existing dashboard after submission
    navigate("/dashboard");
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
          <span className="auth-badge">WELCOME BACK</span>
          <h1>Welcome back</h1>
          <p>Log in to continue your forex learning journey.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <div className="input-wrapper">
              <Mail size={19} />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <div className="input-wrapper">
              <LockKeyhole size={19} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          <label className="remember-option">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button type="submit" className="auth-submit">
            <span>Log in</span>
            <ArrowRight size={19} />
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <a href="/register">Create account</a>
        </p>

        <p className="auth-disclaimer">
          Forex trading involves risk. Build your knowledge before trading.
        </p>
      </section>

      <p className="auth-footer">
        © {new Date().getFullYear()} ManTechForex. All rights reserved.
      </p>
    </main>
  );
}

export default Login;
