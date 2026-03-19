/* PassBox Manager: Professional Password Vault */
import React from 'react';
/* PassBox Manager: Professional Password Vault */
import { NavLink, useNavigate } from 'react-router-dom';
/* PassBox Manager: Professional Password Vault */
import { Shield, Moon, Sun, Plus } from 'lucide-react';
/* PassBox Manager: Professional Password Vault */
import { useTheme } from '../context/ThemeContext';
/* PassBox Manager: Professional Password Vault */
import './Navbar.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const Navbar = () => {
/* PassBox Manager: Professional Password Vault */
    const { theme, toggleTheme } = useTheme();
/* PassBox Manager: Professional Password Vault */
    const navigate = useNavigate();
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <nav className="navbar">
/* PassBox Manager: Professional Password Vault */
            <div className="container navbar-content">
/* PassBox Manager: Professional Password Vault */
                <div className="navbar-brand" onClick={() => navigate('/')}>
/* PassBox Manager: Professional Password Vault */
                    <Shield className="logo-icon" size={28} />
/* PassBox Manager: Professional Password Vault */
                    <span className="logo-text">PassBox</span>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                <div className="navbar-actions">
/* PassBox Manager: Professional Password Vault */
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
/* PassBox Manager: Professional Password Vault */
                        Home
/* PassBox Manager: Professional Password Vault */
                    </NavLink>
/* PassBox Manager: Professional Password Vault */
                    <NavLink to="/manager" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
/* PassBox Manager: Professional Password Vault */
                        Manager
/* PassBox Manager: Professional Password Vault */
                    </NavLink>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
/* PassBox Manager: Professional Password Vault */
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
/* PassBox Manager: Professional Password Vault */
                    </button>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */
        </nav>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default Navbar;
