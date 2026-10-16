
import React from "react";

const markets = [
  {
    pair: "EUR/USD",
    name: "Euro / US Dollar",
    price: "1.0842",
    change: "+0.42%",
    positive: true,
  },
  {
    pair: "GBP/USD",
    name: "British Pound / US Dollar",
    price: "1.2635",
    change: "+0.28%",
    positive: true,
  },
  {
    pair: "USD/JPY",
    name: "US Dollar / Japanese Yen",
    price: "149.82",
    change: "-0.16%",
    positive: false,
  },
  {
    pair: "AUD/USD",
    name: "Australian Dollar / US Dollar",
    price: "0.6521",
    change: "+0.19%",
    positive: true,
  },
];

function Markets() {
  return (
    <section className="markets-section" id="markets">
      <div className="section-heading">
        <span className="section-label">MARKET OVERVIEW</span>

        <h2>Explore the Forex Markets</h2>

        <p>
          Discover popular currency pairs and build your understanding
          of the global foreign exchange market.
        </p>
      </div>

      <div className="markets-grid">
        {markets.map((market) => (
          <div className="market-card" key={market.pair}>
            <div className="market-card-top">
              <div>
                <h3>{market.pair}</h3>
                <p>{market.name}</p>
              </div>

              <span className="market-icon">↗</span>
            </div>

            <div className="market-price">
              <strong>{market.price}</strong>

              <span
                className={
                  market.positive
                    ? "market-change positive"
                    : "market-change negative"
                }
              >
                {market.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="market-disclaimer">
        Illustrative prices only — not live market data or trading advice.
      </p>
    </section>
  );
}

export default Markets;
