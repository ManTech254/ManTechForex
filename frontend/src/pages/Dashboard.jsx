
import { useState } from "react";
import {
  Activity,
  LayoutDashboard,
  ChartNoAxesCombined,
  ArrowLeftRight,
  History,
  UserRound,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Wallet,
  CircleDollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
  Search,
  Clock3,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const marketData = [
  {
    pair: "EUR/USD",
    name: "Euro / US Dollar",
    price: "1.08452",
    change: "+0.42%",
    up: true,
  },
  {
    pair: "GBP/USD",
    name: "British Pound / US Dollar",
    price: "1.27184",
    change: "+0.28%",
    up: true,
  },
  {
    pair: "USD/JPY",
    name: "US Dollar / Japanese Yen",
    price: "149.625",
    change: "-0.16%",
    up: false,
  },
  {
    pair: "AUD/USD",
    name: "Australian Dollar / US Dollar",
    price: "0.65218",
    change: "-0.31%",
    up: false,
  },
];

const recentActivity = [
  {
    pair: "EUR/USD",
    type: "Buy",
    amount: "$1,000.00",
    result: "+$24.50",
    positive: true,
    date: "Today, 10:42 AM",
  },
  {
    pair: "GBP/USD",
    type: "Sell",
    amount: "$500.00",
    result: "+$12.80",
    positive: true,
    date: "Today, 09:15 AM",
  },
  {
    pair: "USD/JPY",
    type: "Buy",
    amount: "$750.00",
    result: "-$8.20",
    positive: false,
    date: "Yesterday, 04:30 PM",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    setShowProfile(false);

    // Frontend-only logout for the current demo setup.
    // Authentication storage can be cleared when backend auth is connected.
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">
      {sidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <a href="/" className="brand dashboard-brand" onClick={closeSidebar}>
          <span className="brand-icon">
            <Activity size={25} strokeWidth={2.5} />
          </span>

          <span className="brand-name">
            ManTech<span>Forex</span>
          </span>
        </a>

        <div className="sidebar-caption">WORKSPACE</div>

        <nav className="sidebar-nav">
          <a
            href="/dashboard"
            className="sidebar-link active"
            onClick={closeSidebar}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </a>

          <a
            href="/demo-trading"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <ChartNoAxesCombined size={19} />
            <span>Demo Trading</span>
          </a>

          <a href="/tools" className="sidebar-link" onClick={closeSidebar}>
            <ArrowLeftRight size={19} />
            <span>Trading Tools</span>
          </a>

          <a href="/history" className="sidebar-link" onClick={closeSidebar}>
            <History size={19} />
            <span>Trading History</span>
          </a>
        </nav>

        <div className="sidebar-caption">ACCOUNT</div>

        <nav className="sidebar-nav">
          <a href="/profile" className="sidebar-link" onClick={closeSidebar}>
            <UserRound size={19} />
            <span>My Profile</span>
          </a>

          <a href="/settings" className="sidebar-link" onClick={closeSidebar}>
            <Settings size={19} />
            <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-icon">
              <Activity size={18} />
            </span>

            <strong>Keep learning</strong>

            <p>
              Build your knowledge before trading with real money.
            </p>

            <a href="/#how-it-works">
              Explore learning <ArrowUpRight size={14} />
            </a>
          </div>

          <a href="/" className="sidebar-link logout-link">
            <LogOut size={19} />
            <span>Back to website</span>
          </a>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <button
            type="button"
            className="dashboard-menu-button"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="dashboard-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search markets..."
              aria-label="Search markets"
            />
          </div>

          <div className="topbar-actions">
            <span className="demo-status">
              <span />
              Demo account
            </span>

            <button
              type="button"
              className="profile-trigger"
              onClick={() => setShowProfile((prev) => !prev)}
              aria-label="Open profile menu"
              aria-expanded={showProfile}
            >
              <span className="profile-avatar">MT</span>

              <span className="profile-trigger-text">
                <strong>Demo Trader</strong>
                <small>My Account</small>
              </span>

              <ChevronDown
                size={16}
                className={showProfile ? "profile-chevron-open" : ""}
              />
            </button>
          </div>
        </header>

        <main className="dashboard-content">
          <div className="dashboard-welcome">
            <div>
              <span className="dashboard-eyebrow">
                YOUR TRADING SPACE
              </span>

              <h1>Welcome to your dashboard</h1>

              <p>
                Review the markets, practice your strategy, and track your
                progress.
              </p>
            </div>

            <a
              href="/demo-trading"
              className="dashboard-primary-button"
            >
              <Plus size={18} />
              Open demo trade
            </a>
          </div>

          <section className="account-banner">
            <div className="account-banner-top">
              <div>
                <span className="account-label">
                  <Wallet size={16} />
                  DEMO ACCOUNT BALANCE
                </span>

                <div className="balance-row">
                  <h2>
                    {showBalance ? "$10,000.00" : "••••••••"}
                  </h2>

                  <button
                    type="button"
                    className="balance-toggle"
                    onClick={() => setShowBalance((prev) => !prev)}
                    aria-label={
                      showBalance ? "Hide balance" : "Show balance"
                    }
                  >
                    <Eye size={18} />
                  </button>
                </div>

                <span className="account-note">
                  Practice funds · No real money
                </span>
              </div>

              <div className="balance-decoration">
                <CircleDollarSign size={54} />
              </div>
            </div>

            <div className="account-stats">
              <div>
                <span>Today's demo P/L</span>
                <strong className="positive-value">+$128.40</strong>
              </div>

              <div>
                <span>Open positions</span>
                <strong>3</strong>
              </div>

              <div>
                <span>Win rate</span>
                <strong>68.5%</strong>
              </div>
            </div>
          </section>

          <section className="dashboard-stats-grid">
            <article className="dashboard-stat-card">
              <div className="stat-card-top">
                <span>Total demo trades</span>
                <span className="stat-icon teal">
                  <Activity size={19} />
                </span>
              </div>

              <strong>24</strong>
              <span className="stat-footnote">Practice activity</span>
            </article>

            <article className="dashboard-stat-card">
              <div className="stat-card-top">
                <span>Winning trades</span>
                <span className="stat-icon green">
                  <TrendingUp size={19} />
                </span>
              </div>

              <strong>17</strong>
              <span className="stat-footnote">Sample account data</span>
            </article>

            <article className="dashboard-stat-card">
              <div className="stat-card-top">
                <span>Losing trades</span>
                <span className="stat-icon red">
                  <TrendingDown size={19} />
                </span>
              </div>

              <strong>7</strong>
              <span className="stat-footnote">Sample account data</span>
            </article>

            <article className="dashboard-stat-card">
              <div className="stat-card-top">
                <span>Demo equity</span>
                <span className="stat-icon purple">
                  <CircleDollarSign size={19} />
                </span>
              </div>

              <strong>$10,128.40</strong>
              <span className="stat-footnote">Illustrative balance</span>
            </article>
          </section>

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <h2>Market overview</h2>
                <p>Explore selected currency pairs</p>
              </div>

              <a href="/demo-trading" className="panel-link">
                View markets <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="market-table-wrap">
              <table className="dashboard-market-table">
                <thead>
                  <tr>
                    <th>Currency pair</th>
                    <th>Sample price</th>
                    <th>Sample change</th>
                    <th>Trend</th>
                  </tr>
                </thead>

                <tbody>
                  {marketData.map((market) => (
                    <tr key={market.pair}>
                      <td>
                        <div className="market-pair-cell">
                          <span className="pair-symbol">
                            {market.pair.slice(0, 3)}
                          </span>

                          <span>
                            <strong>{market.pair}</strong>
                            <small>{market.name}</small>
                          </span>
                        </div>
                      </td>

                      <td className="market-price">{market.price}</td>

                      <td
                        className={
                          market.up ? "positive-value" : "negative-value"
                        }
                      >
                        {market.change}
                      </td>

                      <td>
                        <span
                          className={`trend-label ${
                            market.up ? "trend-up" : "trend-down"
                          }`}
                        >
                          {market.up ? (
                            <ArrowUpRight size={15} />
                          ) : (
                            <ArrowDownRight size={15} />
                          )}

                          {market.up ? "Up" : "Down"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="sample-data-note">
              Illustrative prices and changes only — not live market data.
            </p>
          </section>

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <h2>Recent demo activity</h2>
                <p>Your latest sample trading activity</p>
              </div>

              <a href="/history" className="panel-link">
                View history <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="activity-list">
              {recentActivity.map((trade, index) => (
                <div
                  className="activity-row"
                  key={`${trade.pair}-${index}`}
                >
                  <div
                    className={`activity-type-icon ${
                      trade.type === "Buy" ? "buy-icon" : "sell-icon"
                    }`}
                  >
                    {trade.type === "Buy" ? (
                      <TrendingUp size={19} />
                    ) : (
                      <TrendingDown size={19} />
                    )}
                  </div>

                  <div className="activity-details">
                    <strong>{trade.pair}</strong>
                    <span>
                      {trade.type} · {trade.date}
                    </span>
                  </div>

                  <div className="activity-amount">
                    <strong>{trade.amount}</strong>
                    <span>Practice amount</span>
                  </div>

                  <strong
                    className={
                      trade.positive ? "positive-value" : "negative-value"
                    }
                  >
                    {trade.result}
                  </strong>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-bottom-grid">
            <article className="dashboard-panel learning-panel">
              <div className="learning-icon">
                <Activity size={23} />
              </div>

              <h2>Keep improving your skills</h2>

              <p>
                Learn how currency pairs work, understand risk, and practice
                before considering live trading.
              </p>

              <a href="/#how-it-works" className="panel-link">
                Explore learning resources <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="dashboard-panel quick-actions-panel">
              <h2>Quick actions</h2>

              <a href="/demo-trading" className="quick-action-link">
                <span>
                  <ChartNoAxesCombined size={18} />
                  Practice a trade
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a href="/tools" className="quick-action-link">
                <span>
                  <ArrowLeftRight size={18} />
                  Open trading tools
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a href="/profile" className="quick-action-link">
                <span>
                  <UserRound size={18} />
                  Update your profile
                </span>
                <ArrowUpRight size={17} />
              </a>
            </article>
          </section>

          <footer className="dashboard-footer">
            <span>© {new Date().getFullYear()} ManTechForex</span>

            <span>
              <Clock3 size={14} />
              Demo environment · Sample data only
            </span>
          </footer>
        </main>
      </div>

      {/* Profile dropdown */}
      {showProfile && (
        <>
          <button
            type="button"
            className="profile-modal-overlay"
            onClick={() => setShowProfile(false)}
            aria-label="Close profile menu"
          />

          <section
            className="profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
          >
            <button
              type="button"
              className="profile-modal-close"
              onClick={() => setShowProfile(false)}
              aria-label="Close profile menu"
            >
              <X size={18} />
            </button>

            <div className="profile-modal-user">
              <div className="profile-modal-avatar">
                <UserRound size={28} />
              </div>

              <h3 id="profile-modal-title">Demo Trader</h3>
              <p>demo@example.com</p>
            </div>

            <div className="profile-modal-divider" />

            <button
              type="button"
              className="profile-modal-action"
              onClick={() => {
                setShowProfile(false);
                navigate("/profile");
              }}
            >
              <UserRound size={18} />
              <span>View Profile</span>
            </button>

            <button
              type="button"
              className="profile-modal-action profile-logout"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </section>
        </>
      )}
    </div>
  );
}

export default Dashboard;
