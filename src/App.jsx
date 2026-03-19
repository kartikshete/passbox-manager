/* PassBox Manager: Professional Password Vault */
import React from 'react';
/* PassBox Manager: Professional Password Vault */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* PassBox Manager: Professional Password Vault */
import { ThemeProvider } from './context/ThemeContext';
/* PassBox Manager: Professional Password Vault */
import { SiteProvider } from './context/SiteContext';
/* PassBox Manager: Professional Password Vault */
import Navbar from './components/Navbar';
/* PassBox Manager: Professional Password Vault */
import Home from './pages/Home';
/* PassBox Manager: Professional Password Vault */
import Manager from './pages/Manager';
/* PassBox Manager: Professional Password Vault */
import AddSite from './pages/AddSite';
/* PassBox Manager: Professional Password Vault */
import './App.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
function App() {
/* PassBox Manager: Professional Password Vault */
  return (
/* PassBox Manager: Professional Password Vault */
    <ThemeProvider>
/* PassBox Manager: Professional Password Vault */
      <SiteProvider>
/* PassBox Manager: Professional Password Vault */
        <Router>
/* PassBox Manager: Professional Password Vault */
          <div className="app">
/* PassBox Manager: Professional Password Vault */
            <Navbar />
/* PassBox Manager: Professional Password Vault */
            <main className="main-content">
/* PassBox Manager: Professional Password Vault */
              <Routes>
/* PassBox Manager: Professional Password Vault */
                <Route path="/" element={<Home />} />
/* PassBox Manager: Professional Password Vault */
                <Route path="/manager" element={<Manager />} />
/* PassBox Manager: Professional Password Vault */
                <Route path="/add" element={<AddSite />} />
/* PassBox Manager: Professional Password Vault */
              </Routes>
/* PassBox Manager: Professional Password Vault */
            </main>
/* PassBox Manager: Professional Password Vault */
          </div>
/* PassBox Manager: Professional Password Vault */
        </Router>
/* PassBox Manager: Professional Password Vault */
      </SiteProvider>
/* PassBox Manager: Professional Password Vault */
    </ThemeProvider>
/* PassBox Manager: Professional Password Vault */
  );
/* PassBox Manager: Professional Password Vault */
}
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default App;
