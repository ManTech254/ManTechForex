
import React, { useState } from "react";
import {
  ArrowLeft,
  History,
  Search,
  ChartNoAxesCombined,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const sampleTrades = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "Buy",
    lotSize: 0.1,
    entry: 1.0825,
    exit: 1.0865,
    profit: 40,
    status: "Closed",
    date: "2026-10-15 10:30",
  },
  {
    id: 2,
    pair: "GBP/USD",
    type: "Sell",
    lotSize: 0.2,
    entry: 1.275,
    exit: 1.278,
    profit: -60,
    status: "Closed",
    date: "2026-10-15 09:15",
  },
  {
    id: 3,
    pair: "USD/JPY",
    type: "Buy",
    lotSize: 0.1,
    entry: 149.25,
    exit: 149.65,
    profit: 26.8,
    status: "Closed",
    date: "2026-10-14 14:20",
  },
];

const TradingHistory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTrades = sampleTrades.filter((trade) => {
    const matchesSearch = trade.pair
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || trade.status === filter;

    return matchesSearch && matchesFilter;
  });

  const totalProfit = sampleTrades.reduce(
    (total, trade) => total + trade.profit,
    0
  );

  const winningTrades = sampleTrades.filter(
    (trade) => trade.profit > 0
  ).length;

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);

  return (
    <main className="history-page">
      <header className="history-topbar">
        <Link to="/dashboard" className="history-back-link">
          <ArrowLeft size={18} />
          Dashboard
        </Link>

        <div className="history-brand">
          <ChartNoAxesCombined size={24} />
          <span>ManTechForex</span>
        </div>

        <span className="history-badge">
          <History size={15} />
          Trade history
        </span>
      </header>

      <section className="history-content">
        <div className="history-heading">
          <span className="history-eyebrow">YOUR ACTIVITY</span>
          <h1>Trading History</h1>
          <p>Review your previous trades and their outcomes.</p>
        </div>

        <div className="history-stats">
          <article className="history-stat-card">
            <span>Total closed trades</span>
            <strong>{sampleTrades.length}</strong>
          </article>

          <article className="history-stat-card">
            <span>Net profit / loss</span>
            <strong className={totalProfit >= 0 ? "history-profit" : "history-loss"}>
              {formatMoney(totalProfit)}
            </strong>
          </article>

          <article className="history-stat-card">
            <span>Winning trades</span>
            <strong>{winningTrades} / {sampleTrades.length}</strong>
          </article>
        </div>

        <section className="history-table-panel">
          <div className="history-table-heading">
            <div>
              <h2>Recent trades</h2>
              <p>Sample records for the frontend demo</p>
            </div>

            <Link to="/demo-trading" className="history-trade-link">
              Open demo trading
            </Link>
          </div>

          <div className="history-controls">
            <div className="history-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search currency pair..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter trades by status"
            >
              <option value="All">All trades</option>
              <option value="Closed">Closed</option>
              <option value="Open">Open</option>
            </select>
          </div>

          <div className="history-table-wrap">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Currency pair</th>
                  <th>Type</th>
                  <th>Lot size</th>
                  <th>Entry</th>
                  <th>Exit</th>
                  <th>Profit / Loss</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredTrades.map((trade) => (
                  <tr key={trade.id}>
                    <td className="history-pair">{trade.pair}</td>

                    <td>
                      <span className={`history-type ${trade.type.toLowerCase()}`}>
                        {trade.type === "Buy" ? (
                          <ArrowUpRight size={15} />
                        ) : (
                          <ArrowDownRight size={15} />
                        )}
                        {trade.type}
                      </span>
                    </td>

                    <td>{trade.lotSize.toFixed(2)}</td>
                    <td>{trade.entry}</td>
                    <td>{trade.exit}</td>

                    <td className={trade.profit >= 0 ? "history-profit" : "history-loss"}>
                      {formatMoney(trade.profit)}
                    </td>

                    <td>
                      <span className="history-status">
                        {trade.status}
                      </span>
                    </td>

                    <td>{trade.date}</td>
                  </tr>
                ))}

                {filteredTrades.length === 0 && (
                  <tr>
                    <td colSpan="8" className="history-empty">
                      No trades match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <p className="history-disclaimer">
          These are illustrative records, not actual brokerage transactions.
          The figures are for frontend demonstration only.
        </p>
      </section>
    </main>
  );
};

export default TradingHistory;
