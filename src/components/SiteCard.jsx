/* PassBox Manager: Professional Password Vault */
import React, { useState } from 'react';
/* PassBox Manager: Professional Password Vault */
import { Copy, Trash2, ExternalLink, Eye, EyeOff } from 'lucide-react';
/* PassBox Manager: Professional Password Vault */
import { useSites } from '../context/SiteContext';
/* PassBox Manager: Professional Password Vault */
import './SiteCard.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const SiteCard = ({ site }) => {
/* PassBox Manager: Professional Password Vault */
    const { deleteSite } = useSites();
/* PassBox Manager: Professional Password Vault */
    const [showPassword, setShowPassword] = useState(false);
/* PassBox Manager: Professional Password Vault */
    const [copied, setCopied] = useState(false);
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const copyToClipboard = (text) => {
/* PassBox Manager: Professional Password Vault */
        navigator.clipboard.writeText(text);
/* PassBox Manager: Professional Password Vault */
        setCopied(true);
/* PassBox Manager: Professional Password Vault */
        setTimeout(() => setCopied(false), 2000);
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const getFavicon = (url) => {
/* PassBox Manager: Professional Password Vault */
        try {
/* PassBox Manager: Professional Password Vault */
            const domain = new URL(url).hostname;
/* PassBox Manager: Professional Password Vault */
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
/* PassBox Manager: Professional Password Vault */
        } catch (e) {
/* PassBox Manager: Professional Password Vault */
            return `https://ui-avatars.com/api/?name=${site.siteName}&background=random`;
/* PassBox Manager: Professional Password Vault */
        }
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <div className="site-card">
/* PassBox Manager: Professional Password Vault */
            <div className="site-header">
/* PassBox Manager: Professional Password Vault */
                <div className="site-icon">
/* PassBox Manager: Professional Password Vault */
                    <img src={getFavicon(site.url)} alt={`${site.siteName} favicon`} onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${site.siteName}`} />
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
                <div className="site-info">
/* PassBox Manager: Professional Password Vault */
                    <h3>{site.siteName}</h3>
/* PassBox Manager: Professional Password Vault */
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-link">
/* PassBox Manager: Professional Password Vault */
                        {new URL(site.url).hostname} <ExternalLink size={12} />
/* PassBox Manager: Professional Password Vault */
                    </a>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            <div className="site-details">
/* PassBox Manager: Professional Password Vault */
                <div className="detail-row">
/* PassBox Manager: Professional Password Vault */
                    <span className="detail-label">Username</span>
/* PassBox Manager: Professional Password Vault */
                    <div className="detail-value">
/* PassBox Manager: Professional Password Vault */
                        {site.username}
/* PassBox Manager: Professional Password Vault */
                        <button className="copy-btn" onClick={() => copyToClipboard(site.username)} title="Copy Username">
/* PassBox Manager: Professional Password Vault */
                            <Copy size={16} />
/* PassBox Manager: Professional Password Vault */
                        </button>
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                <div className="detail-row">
/* PassBox Manager: Professional Password Vault */
                    <span className="detail-label">Password</span>
/* PassBox Manager: Professional Password Vault */
                    <div className="detail-value">
/* PassBox Manager: Professional Password Vault */
                        <span className="password-text">
/* PassBox Manager: Professional Password Vault */
                            {showPassword ? site.password : '••••••••'}
/* PassBox Manager: Professional Password Vault */
                        </span>
/* PassBox Manager: Professional Password Vault */
                        <div className="action-buttons">
/* PassBox Manager: Professional Password Vault */
                            <button className="icon-btn" onClick={() => setShowPassword(!showPassword)}>
/* PassBox Manager: Professional Password Vault */
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
/* PassBox Manager: Professional Password Vault */
                            </button>
/* PassBox Manager: Professional Password Vault */
                            <button className="icon-btn" onClick={() => copyToClipboard(site.password)} title="Copy Password">
/* PassBox Manager: Professional Password Vault */
                                <Copy size={16} />
/* PassBox Manager: Professional Password Vault */
                            </button>
/* PassBox Manager: Professional Password Vault */
                        </div>
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            <button className="delete-btn" onClick={() => deleteSite(site.id)}>
/* PassBox Manager: Professional Password Vault */
                <Trash2 size={18} />
/* PassBox Manager: Professional Password Vault */
            </button>
/* PassBox Manager: Professional Password Vault */
        </div>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default SiteCard;
