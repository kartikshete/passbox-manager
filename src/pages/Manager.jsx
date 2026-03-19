/* PassBox Manager: Professional Password Vault */
import React, { useState } from 'react';
/* PassBox Manager: Professional Password Vault */
import { Plus, Search, Frown } from 'lucide-react';
/* PassBox Manager: Professional Password Vault */
import { NavLink } from 'react-router-dom';
/* PassBox Manager: Professional Password Vault */
import { useSites } from '../context/SiteContext';
/* PassBox Manager: Professional Password Vault */
import SiteCard from '../components/SiteCard';
/* PassBox Manager: Professional Password Vault */
import './Manager.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const Manager = () => {
/* PassBox Manager: Professional Password Vault */
    const { sites } = useSites();
/* PassBox Manager: Professional Password Vault */
    const [searchTerm, setSearchTerm] = useState('');
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const filteredSites = sites.filter(site =>
/* PassBox Manager: Professional Password Vault */
        site.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
/* PassBox Manager: Professional Password Vault */
        site.url.toLowerCase().includes(searchTerm.toLowerCase())
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <div className="manager-page container animate-fade-in">
/* PassBox Manager: Professional Password Vault */
            <div className="manager-header">
/* PassBox Manager: Professional Password Vault */
                <div>
/* PassBox Manager: Professional Password Vault */
                    <h1 className="page-title">Your Passwords</h1>
/* PassBox Manager: Professional Password Vault */
                    <p className="page-subtitle">Manage all your sites and credentials securely.</p>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
                <NavLink to="/add" className="btn btn-primary">
/* PassBox Manager: Professional Password Vault */
                    <Plus size={20} /> Add Site
/* PassBox Manager: Professional Password Vault */
                </NavLink>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            <div className="search-container">
/* PassBox Manager: Professional Password Vault */
                <Search className="search-icon" size={20} />
/* PassBox Manager: Professional Password Vault */
                <input
/* PassBox Manager: Professional Password Vault */
                    type="text"
/* PassBox Manager: Professional Password Vault */
                    placeholder="Search by site name or URL..."
/* PassBox Manager: Professional Password Vault */
                    className="search-input"
/* PassBox Manager: Professional Password Vault */
                    value={searchTerm}
/* PassBox Manager: Professional Password Vault */
                    onChange={(e) => setSearchTerm(e.target.value)}
/* PassBox Manager: Professional Password Vault */
                />
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            {filteredSites.length > 0 ? (
/* PassBox Manager: Professional Password Vault */
                <div className="sites-grid">
/* PassBox Manager: Professional Password Vault */
                    {filteredSites.map(site => (
/* PassBox Manager: Professional Password Vault */
                        <SiteCard key={site.id} site={site} />
/* PassBox Manager: Professional Password Vault */
                    ))}
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            ) : (
/* PassBox Manager: Professional Password Vault */
                <div className="empty-state">
/* PassBox Manager: Professional Password Vault */
                    {sites.length === 0 ? (
/* PassBox Manager: Professional Password Vault */
                        <>
/* PassBox Manager: Professional Password Vault */
                            <div className="empty-icon"><Plus size={48} /></div>
/* PassBox Manager: Professional Password Vault */
                            <h2>No sites added yet</h2>
/* PassBox Manager: Professional Password Vault */
                            <p>Start by adding your first password.</p>
/* PassBox Manager: Professional Password Vault */
                            <NavLink to="/add" className="btn btn-primary mt-4">
/* PassBox Manager: Professional Password Vault */
                                Add your first site
/* PassBox Manager: Professional Password Vault */
                            </NavLink>
/* PassBox Manager: Professional Password Vault */
                        </>
/* PassBox Manager: Professional Password Vault */
                    ) : (
/* PassBox Manager: Professional Password Vault */
                        <>
/* PassBox Manager: Professional Password Vault */
                            <div className="empty-icon"><Frown size={48} /></div>
/* PassBox Manager: Professional Password Vault */
                            <h2>No results found</h2>
/* PassBox Manager: Professional Password Vault */
                            <p>Try searching for something else.</p>
/* PassBox Manager: Professional Password Vault */
                        </>
/* PassBox Manager: Professional Password Vault */
                    )}
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            )}
/* PassBox Manager: Professional Password Vault */
        </div>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default Manager;
