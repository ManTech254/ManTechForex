
import React, { useState } from "react";
import {
  ArrowLeft,
  Calculator,
  ChartNoAxesCombined,
  CircleDollarSign,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const TradingTools = () => {
  const [accountBalance, setAccountBalance] = useState("1000");
  const [riskPercent, setRiskPercent] = useState("1");
  const [stopLoss, setStopLoss] = useState("20");
  const [pipValue, setPipValue] = useState("10");
  const [lotSize, setLotSize] = useState("0.10");
  const [takeProfit, setTakeProfit] = useState("40");

  const balance = Number(accountBalance) || 0;
  const risk = Number(riskPercent) || 0;
  const stop = Number(stopLoss) || 0;
  const pip = Number(pipValue) || 0;
  const lots = Number(lotSize) || 0;
  const target = Number(takeProfit) || 0;

  const riskAmount = balance * (risk / 100);

  const calculatedLotSize =
    stop > 0 && pip > 0 ? riskAmount / (stop * pip) : 0;

  const potentialProfit = target * pip * lots;
  const potentialLoss = stop * pip * lots;

  const money = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main className="tools-page">
      <header className="tools-topbar">
        <Link to="/dashboard" className="tools-back-link">
          <ArrowLeft size={18} />
          Dashboard
        </Link>

        <div className="tools-brand">
          <ChartNoAxesCombined size={24} />
          <span>ManTechForex</span>
        </div>

        <span className="tools-badge">Trading tools</span>
      </header>

      <section className="tools-content">
        <div className="tools-heading">
          <span className="tools-eyebrow">TRADE SMARTER</span>
          <h1>Trading Tools</h1>
          <p>
            Calculate your risk, position size, and potential trade outcomes
            before entering the market.
          </p>
        </div>

        <div className="tools-notice">
          <Info size={19} />
          <p>
            These calculators provide estimates. Actual results depend on the
            currency pair, account currency, broker, spread, and execution.
          </p>
        </div>

        <div className="tools-grid">
          <section className="tool-card">
            <div className="tool-card-heading">
              <div className="tool-icon">
                <CircleDollarSign size={22} />
              </div>
              <div>
                <h2>Position Size Calculator</h2>
                <p>Estimate your position size based on your risk.</p>
              </div>
            </div>

            <label className="tool-label">
              Account balance (USD)
              <input
                type="number"
                min="0"
                value={accountBalance}
                onChange={(e) => setAccountBalance(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Risk per trade (%)
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={riskPercent}
                onChange={(e) => setRiskPercent(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Stop loss (pips)
              <input
                type="number"
                min="0"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Pip value per standard lot (USD)
              <input
                type="number"
                min="0"
                step="0.01"
                value={pipValue}
                onChange={(e) => setPipValue(e.target.value)}
              />
            </label>

            <div className="tool-result">
              <span>Amount at risk</span>
              <strong>{money(riskAmount)}</strong>
              <span>Estimated position size</span>
              <strong>
                {Number.isFinite(calculatedLotSize)
                  ? `${calculatedLotSize.toFixed(3)} lots`
                  : "0.000 lots"}
              </strong>
            </div>
          </section>

          <section className="tool-card">
            <div className="tool-card-heading">
              <div className="tool-icon">
                <Calculator size={22} />
              </div>
              <div>
                <h2>Profit & Loss Calculator</h2>
                <p>Estimate a trade's possible outcome.</p>
              </div>
            </div>

            <label className="tool-label">
              Position size (lots)
              <input
                type="number"
                min="0"
                step="0.01"
                value={lotSize}
                onChange={(e) => setLotSize(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Take profit (pips)
              <input
                type="number"
                min="0"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Stop loss (pips)
              <input
                type="number"
                min="0"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
              />
            </label>

            <label className="tool-label">
              Pip value per standard lot (USD)
              <input
                type="number"
                min="0"
                step="0.01"
                value={pipValue}
                onChange={(e) => setPipValue(e.target.value)}
              />
            </label>

            <div className="tool-result">
              <span>Potential profit</span>
              <strong className="tool-positive">
                +{money(potentialProfit)}
              </strong>
              <span>Potential loss</span>
              <strong className="tool-negative">
                -{money(potentialLoss)}
              </strong>
              <span>Risk-to-reward ratio</span>
              <strong>
                {stop > 0 ? `1 : ${(target / stop).toFixed(2)}` : "—"}
              </strong>
            </div>
          </section>
        </div>

        <div className="tools-footer-note">
          <Info size={17} />
          <span>
            Pip value is user-adjustable because it varies by currency pair
            and account currency. This page does not place trades.
          </span>
        </div>
      </section>
    </main>
  );
};

export default TradingTools;
