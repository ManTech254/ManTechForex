
import {
  Activity,
  LogIn,
  UserPlus,
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        <span className="brand-icon">
          <Activity size={26} strokeWidth={2.5} />
        </span>

        <span className="brand-name">
          ManTech<span>Forex</span>
        </span>
      </a>

      <nav className="nav-links">
        <a href="#markets">Markets</a>
        <a href="#how-it-works">How it works</a>
        <a href="#tools">Tools</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className="nav-actions">
        <a href="/login" className="login-link">
          <LogIn size={17} />
          <span>Log in</span>
        </a>

        <a href="/register" className="btn-primary">
          <UserPlus size={17} />
          <span>Get started</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
