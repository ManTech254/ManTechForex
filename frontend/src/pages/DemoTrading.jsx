
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowDownRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Info,
  Plus,
  RefreshCw,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";

const markets = [
  { pair: "EUR/USD", price: 1.08452, change: "+0.42%", up: true },
  { pair: "GBP/USD", price: 1.27184, change: "+0.28%", up: true },
  { pair: "USD/JPY", price: 149.625, change: "-0.16%", up: false },
  { pair: "AUD/USD", price: 0.65218, change: "-0.31%", up: false },
];

function formatPrice(pair, price) {
  return pair.endsWith("JPY") ? price.toFixed(3) : price.toFixed(5);
}

function DemoTrading() {
  const [selectedPair, setSelectedPair] = useState("EUR/USD");
  const [tradeSide, setTradeSide] = useState("Buy");
  const [amount, setAmount] = useState("1000");
  const [leverage, setLeverage] = useState("10");
  const [positions, setPositions] = useState([]);
  const [message, setMessage] = useState("");
  const [nextId, setNextId] = useState(1);

  const selectedMarket =
    markets.find((market) => market.pair === selectedPair) || markets[0];

  const balance = 10000;
  const usedMargin = positions.reduce(
    (total, position) => total + position.amount / Number(position.leverage),
    0
  );
  const availableMargin = balance - usedMargin;

  const openTrade = (event) => {
    event.preventDefault();

    const tradeAmount = Number(amount);

    if (!Number.isFinite(tradeAmount) || tradeAmount <= 0) {
      setMessage("Enter a valid trade amount greater than zero.");
      return;
    }

    if (tradeAmount / Number(leverage) > availableMargin) {
      setMessage("Insufficient demo margin for this trade.");
      return;
    }

    const newPosition = {
      id: nextId,
      pair: selectedPair,
      side: tradeSide,
      amount: tradeAmount,
      leverage,
      entryPrice: selectedMarket.price,
      pnl: 0,
    };

    setPositions((current) => [newPosition, ...current]);
    setNextId((id) => id + 1);
    setMessage(
      `${tradeSide} demo position opened for ${selectedPair}.`
    );
  };

  const closePosition = (id) => {
    setPositions((current) =>
      current.filter((position) => position.id !== id)
    );
    setMessage("Demo position closed. No real funds were involved.");
  };

  return (
    <div className="trading-page">
      <header className="trading-topbar">
        <a href="/dashboard" className="trading-back-link">
          <ArrowLeft size={18} />
          <span>Dashboard</span>
        </a>

        <a href="/" className="brand trading-brand">
          <span className="brand-icon">
            <Activity size={24} strokeWidth={2.5} />
          </span>
          <span className="brand-name">
            ManTech<span>Forex</span>
          </span>
        </a>

        <span className="trading-demo-badge">
          <span /> Demo environment
        </span>
      </header>

      <main className="trading-content">
        <div className="trading-page-heading">
          <div>
            <span className="dashboard-eyebrow">PRACTICE WORKSPACE</span>
            <h1>Demo Trading</h1>
            <p>Practice trade setups using simulated funds and sample prices.</p>
          </div>

          <a href="/history" className="trading-history-link">
            <Clock3 size={17} />
            Trading history
          </a>
        </div>

        <section className="trading-account-summary">
          <article>
            <span><Wallet size={16} /> Demo balance</span>
            <strong>$10,000.00</strong>
            <small>Starting practice balance</small>
          </article>

          <article>
            <span><CircleDollarSign size={16} /> Available margin</span>
            <strong>${availableMargin.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</strong>
            <small>Estimated from open positions</small>
          </article>

          <article>
            <span><ChartNoAxesCombined size={16} /> Open positions</span>
            <strong>{positions.length}</strong>
            <small>Current simulated trades</small>
          </article>
        </section>

        <section className="trading-workspace">
          <div className="trading-chart-panel">
            <div className="trading-market-heading">
              <div>
                <span className="trading-muted-label">SELECTED MARKET</span>
                <h2>{selectedPair}</h2>
                <p>Foreign exchange · Sample quote</p>
              </div>

              <div className="trading-current-price">
                <strong>{formatPrice(selectedPair, selectedMarket.price)}</strong>
                <span className={selectedMarket.up ? "positive-value" : "negative-value"}>
                  {selectedMarket.change}
                </span>
              </div>
            </div>

            <div className="chart-timeframes">
              <span>Illustrative chart</span>
              <div>
                <button type="button" className="timeframe-active">1H</button>
                <button type="button" disabled>4H</button>
                <button type="button" disabled>1D</button>
              </div>
            </div>

            <div className="demo-chart">
              <svg
                viewBox="0 0 700 300"
                role="img"
                aria-label="Illustrative currency price chart, not live market data"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="demoChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#20b2a6" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#20b2a6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {[40, 90, 140, 190, 240, 290].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="700"
                    y2={y}
                    stroke="#263840"
                    strokeDasharray="5 6"
                  />
                ))}

                {[100, 200, 300, 400, 500, 600].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="300"
                    stroke="#263840"
                    strokeDasharray="5 6"
                  />
                ))}

                <path
                  d="M0 215 L45 195 L80 215 L115 165 L150 178 L185 125 L220 145 L255 105 L290 135 L325 88 L360 115 L395 75 L430 95 L465 55 L500 80 L535 65 L570 100 L605 58 L645 72 L700 35 L700 300 L0 300 Z"
                  fill="url(#demoChartFill)"
                />

                <path
                  d="M0 215 L45 195 L80 215 L115 165 L150 178 L185 125 L220 145 L255 105 L290 135 L325 88 L360 115 L395 75 L430 95 L465 55 L500 80 L535 65 L570 100 L605 58 L645 72 L700 35"
                  fill="none"
                  stroke="#20b2a6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="700" cy="35" r="5" fill="#65e6c4" />
              </svg>
            </div>

            <div className="chart-disclaimer">
              <Info size={15} />
              <span>Illustration only. Prices and chart movements are not live or tradeable.</span>
            </div>

            <div className="market-selector-heading">
              <h3>Available currency pairs</h3>
              <RefreshCw size={16} />
            </div>

            <div className="trading-market-list">
              {markets.map((market) => (
                <button
                  type="button"
                  key={market.pair}
                  className={`trading-market-row ${
                    selectedPair === market.pair ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedPair(market.pair);
                    setMessage("");
                  }}
                >
                  <span className="market-row-pair">
                    <strong>{market.pair}</strong>
                    <small>Forex pair</small>
                  </span>

                  <span className="market-row-price">
                    <strong>{formatPrice(market.pair, market.price)}</strong>
                    <small className={market.up ? "positive-value" : "negative-value"}>
                      {market.change}
                    </small>
                  </span>

                  {market.up ? (
                    <TrendingUp size={18} className="positive-value" />
                  ) : (
                    <ArrowDownRight size={18} className="negative-value" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <aside className="trade-order-panel">
            <div className="trade-order-heading">
              <div>
                <h2>Place demo trade</h2>
                <p>Configure your practice order</p>
              </div>
              <span className="order-demo-icon"><Activity size={19} /></span>
            </div>

            <div className="order-pair-display">
              <span>Currency pair</span>
              <strong>{selectedPair}</strong>
              <ChevronDown size={17} />
            </div>

            <div className="trade-side-toggle">
              <button
                type="button"
                className={tradeSide === "Buy" ? "buy-active" : ""}
                onClick={() => setTradeSide("Buy")}
              >
                <ArrowUpRight size={17} /> Buy
              </button>

              <button
                type="button"
                className={tradeSide === "Sell" ? "sell-active" : ""}
                onClick={() => setTradeSide("Sell")}
              >
                <ArrowDownRight size={17} /> Sell
              </button>
            </div>

            <form onSubmit={openTrade}>
              <div className="trade-form-group">
                <label htmlFor="tradeAmount">Trade amount (USD)</label>
                <div className="trade-input-wrap">
                  <span>$</span>
                  <input
                    id="tradeAmount"
                    type="number"
                    min="1"
                    step="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="trade-form-group">
                <label htmlFor="tradeLeverage">Leverage</label>
                <select
                  id="tradeLeverage"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                >
                  <option value="1">1:1</option>
                  <option value="5">1:5</option>
                  <option value="10">1:10</option>
                  <option value="20">1:20</option>
                </select>
              </div>

              <div className="order-estimates">
                <div>
                  <span>Sample entry price</span>
                  <strong>{formatPrice(selectedPair, selectedMarket.price)}</strong>
                </div>
                <div>
                  <span>Estimated margin</span>
                  <strong>
                    ${(Math.max(0, Number(amount) || 0) / Number(leverage)).toLocaleString(
                      "en-US",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )}
                  </strong>
                </div>
              </div>

              <button
                type="submit"
                className={`place-trade-button ${tradeSide === "Sell" ? "place-sell" : ""}`}
              >
                <Plus size={18} />
                {tradeSide === "Buy" ? "Open Buy Position" : "Open Sell Position"}
              </button>
            </form>

            {message && (
              <p className="trade-feedback" role="status">
                {message}
              </p>
            )}

            <div className="trade-risk-note">
              <Info size={16} />
              <p>
                This is a frontend simulation. No real orders are sent, and
                profit or loss is not calculated from live prices.
              </p>
            </div>
          </aside>
        </section>

        <section className="open-positions-panel">
          <div className="open-positions-heading">
            <div>
              <h2>Open positions</h2>
              <p>Your simulated trades in this session</p>
            </div>
            <span className="positions-count">{positions.length} positions</span>
          </div>

          {positions.length === 0 ? (
            <div className="empty-positions">
              <span><ChartNoAxesCombined size={25} /></span>
              <strong>No open positions yet</strong>
              <p>Choose a currency pair and open a demo trade to see it here.</p>
            </div>
          ) : (
            <div className="positions-table-wrap">
              <table className="positions-table">
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Side</th>
                    <th>Amount</th>
                    <th>Leverage</th>
                    <th>Entry price</th>
                    <th>Demo P/L</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => (
                    <tr key={position.id}>
                      <td><strong>{position.pair}</strong></td>
                      <td>
                        <span className={position.side === "Buy" ? "positive-value" : "negative-value"}>
                          {position.side}
                        </span>
                      </td>
                      <td>${position.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                      <td>1:{position.leverage}</td>
                      <td>{formatPrice(position.pair, position.entryPrice)}</td>
                      <td>$0.00</td>
                      <td>
                        <button
                          type="button"
                          className="close-position-button"
                          onClick={() => closePosition(position.id)}
                          aria-label={`Close ${position.pair} demo position`}
                        >
                          <X size={15} /> Close
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer className="trading-page-footer">
          <span>© {new Date().getFullYear()} ManTechForex</span>
          <span>Demo mode · Illustrative data only</span>
        </footer>
      </main>
    </div>
  );
}

export default DemoTrading;
