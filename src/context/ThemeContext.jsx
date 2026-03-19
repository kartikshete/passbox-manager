/* PassBox Manager: Professional Password Vault */
import React, { createContext, useContext, useState, useEffect } from 'react';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const ThemeContext = createContext();
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export const useTheme = () => useContext(ThemeContext);
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export const ThemeProvider = ({ children }) => {
/* PassBox Manager: Professional Password Vault */
    const [theme, setTheme] = useState(() => {
/* PassBox Manager: Professional Password Vault */
        const savedTheme = localStorage.getItem('theme');
/* PassBox Manager: Professional Password Vault */
        return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
/* PassBox Manager: Professional Password Vault */
    });
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    useEffect(() => {
/* PassBox Manager: Professional Password Vault */
        document.documentElement.setAttribute('data-theme', theme);
/* PassBox Manager: Professional Password Vault */
        localStorage.setItem('theme', theme);
/* PassBox Manager: Professional Password Vault */
    }, [theme]);
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const toggleTheme = () => {
/* PassBox Manager: Professional Password Vault */
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
/* PassBox Manager: Professional Password Vault */
            {children}
/* PassBox Manager: Professional Password Vault */
        </ThemeContext.Provider>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
