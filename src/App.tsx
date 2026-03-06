import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              TBYT
            </Link>
            <div className="nav-links">
              <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="nav-link">Terms & Conditions</Link>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 TBYT. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
