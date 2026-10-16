
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Markets from "./components/Markets";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import DemoTrading from "./pages/DemoTrading";
import TradingTools from "./pages/TradingTools";
import TradingHistory from "./pages/TradingHistory";
import Profile from "./pages/Profile";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Markets />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demo-trading" element={<DemoTrading />} />
        <Route path="/trading-tools" element={<TradingTools />} />
        <Route path="/history" element={<TradingHistory />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
