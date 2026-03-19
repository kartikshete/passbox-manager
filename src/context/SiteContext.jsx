/* PassBox Manager: Professional Password Vault */
import React, { createContext, useContext, useState, useEffect } from 'react';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const SiteContext = createContext();
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export const useSites = () => useContext(SiteContext);
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export const SiteProvider = ({ children }) => {
/* PassBox Manager: Professional Password Vault */
    const [sites, setSites] = useState(() => {
/* PassBox Manager: Professional Password Vault */
        const savedSites = localStorage.getItem('passbox_sites');
/* PassBox Manager: Professional Password Vault */
        return savedSites ? JSON.parse(savedSites) : [];
/* PassBox Manager: Professional Password Vault */
    });
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    useEffect(() => {
/* PassBox Manager: Professional Password Vault */
        localStorage.setItem('passbox_sites', JSON.stringify(sites));
/* PassBox Manager: Professional Password Vault */
    }, [sites]);
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const addSite = (site) => {
/* PassBox Manager: Professional Password Vault */
        const newSite = { ...site, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
/* PassBox Manager: Professional Password Vault */
        setSites(prev => [newSite, ...prev]);
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const deleteSite = (id) => {
/* PassBox Manager: Professional Password Vault */
        setSites(prev => prev.filter(site => site.id !== id));
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const updateSite = (id, updatedData) => {
/* PassBox Manager: Professional Password Vault */
        setSites(prev => prev.map(site => site.id === id ? { ...site, ...updatedData } : site));
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <SiteContext.Provider value={{ sites, addSite, deleteSite, updateSite }}>
/* PassBox Manager: Professional Password Vault */
            {children}
/* PassBox Manager: Professional Password Vault */
        </SiteContext.Provider>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
