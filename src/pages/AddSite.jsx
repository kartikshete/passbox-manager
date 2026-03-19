/* PassBox Manager: Professional Password Vault */
import React, { useState } from 'react';
/* PassBox Manager: Professional Password Vault */
import { useNavigate } from 'react-router-dom';
/* PassBox Manager: Professional Password Vault */
import { Save, ArrowLeft, AlertCircle } from 'lucide-react';
/* PassBox Manager: Professional Password Vault */
import { useSites } from '../context/SiteContext';
/* PassBox Manager: Professional Password Vault */
import './AddSite.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const AddSite = () => {
/* PassBox Manager: Professional Password Vault */
    const navigate = useNavigate();
/* PassBox Manager: Professional Password Vault */
    const { addSite } = useSites();
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const [formData, setFormData] = useState({
/* PassBox Manager: Professional Password Vault */
        siteName: '',
/* PassBox Manager: Professional Password Vault */
        url: '',
/* PassBox Manager: Professional Password Vault */
        username: '',
/* PassBox Manager: Professional Password Vault */
        email: '',
/* PassBox Manager: Professional Password Vault */
        password: ''
/* PassBox Manager: Professional Password Vault */
    });
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const [errors, setErrors] = useState({});
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const validate = () => {
/* PassBox Manager: Professional Password Vault */
        const newErrors = {};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
        if (!formData.siteName.trim()) newErrors.siteName = "Site name is required";
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
        // URL Validation
/* PassBox Manager: Professional Password Vault */
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
/* PassBox Manager: Professional Password Vault */
        if (!formData.url.trim()) {
/* PassBox Manager: Professional Password Vault */
            newErrors.url = "URL is required";
/* PassBox Manager: Professional Password Vault */
        } else if (!urlPattern.test(formData.url)) {
/* PassBox Manager: Professional Password Vault */
            newErrors.url = "Please enter a valid URL (e.g., google.com)";
/* PassBox Manager: Professional Password Vault */
        }
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
        // Email Validation (Optional if username is present, but let's say required for this specific field if filled, or generally)
/* PassBox Manager: Professional Password Vault */
        // The user screenshot showed both. Let's make them optional but validated if present? 
/* PassBox Manager: Professional Password Vault */
        // Usually password managers need username OR email. Let's validate email if it's there.
/* PassBox Manager: Professional Password Vault */
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/* PassBox Manager: Professional Password Vault */
        if (formData.email && !emailPattern.test(formData.email)) {
/* PassBox Manager: Professional Password Vault */
            newErrors.email = "Please enter a valid email address";
/* PassBox Manager: Professional Password Vault */
        }
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
        if (!formData.password) newErrors.password = "Password is required";
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
        setErrors(newErrors);
/* PassBox Manager: Professional Password Vault */
        return Object.keys(newErrors).length === 0;
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const handleChange = (e) => {
/* PassBox Manager: Professional Password Vault */
        const { name, value } = e.target;
/* PassBox Manager: Professional Password Vault */
        setFormData(prev => ({ ...prev, [name]: value }));
/* PassBox Manager: Professional Password Vault */
        // Clear error when user types
/* PassBox Manager: Professional Password Vault */
        if (errors[name]) {
/* PassBox Manager: Professional Password Vault */
            setErrors(prev => ({ ...prev, [name]: null }));
/* PassBox Manager: Professional Password Vault */
        }
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    const handleSubmit = (e) => {
/* PassBox Manager: Professional Password Vault */
        e.preventDefault();
/* PassBox Manager: Professional Password Vault */
        if (validate()) {
/* PassBox Manager: Professional Password Vault */
            // Ensure URL has protocol
/* PassBox Manager: Professional Password Vault */
            let formattedUrl = formData.url;
/* PassBox Manager: Professional Password Vault */
            if (!/^https?:\/\//i.test(formattedUrl)) {
/* PassBox Manager: Professional Password Vault */
                formattedUrl = 'https://' + formattedUrl;
/* PassBox Manager: Professional Password Vault */
            }
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            addSite({ ...formData, url: formattedUrl });
/* PassBox Manager: Professional Password Vault */
            navigate('/manager');
/* PassBox Manager: Professional Password Vault */
        }
/* PassBox Manager: Professional Password Vault */
    };
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <div className="add-site-page container animate-fade-in">
/* PassBox Manager: Professional Password Vault */
            <div className="add-site-header">
/* PassBox Manager: Professional Password Vault */
                <button className="back-btn" onClick={() => navigate('/manager')}>
/* PassBox Manager: Professional Password Vault */
                    <ArrowLeft size={20} /> Back
/* PassBox Manager: Professional Password Vault */
                </button>
/* PassBox Manager: Professional Password Vault */
                <h1 className="page-title">Add New Site</h1>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            <div className="form-container">
/* PassBox Manager: Professional Password Vault */
                <form onSubmit={handleSubmit}>
/* PassBox Manager: Professional Password Vault */
                    <div className="form-group">
/* PassBox Manager: Professional Password Vault */
                        <label className="form-label" htmlFor="siteName">Site Name</label>
/* PassBox Manager: Professional Password Vault */
                        <input
/* PassBox Manager: Professional Password Vault */
                            type="text"
/* PassBox Manager: Professional Password Vault */
                            id="siteName"
/* PassBox Manager: Professional Password Vault */
                            name="siteName"
/* PassBox Manager: Professional Password Vault */
                            className={`form-input ${errors.siteName ? 'input-error' : ''}`}
/* PassBox Manager: Professional Password Vault */
                            placeholder="e.g. Google"
/* PassBox Manager: Professional Password Vault */
                            value={formData.siteName}
/* PassBox Manager: Professional Password Vault */
                            onChange={handleChange}
/* PassBox Manager: Professional Password Vault */
                        />
/* PassBox Manager: Professional Password Vault */
                        {errors.siteName && (
/* PassBox Manager: Professional Password Vault */
                            <p className="error-text"><AlertCircle size={14} className="inline-icon" /> {errors.siteName}</p>
/* PassBox Manager: Professional Password Vault */
                        )}
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                    <div className="form-group">
/* PassBox Manager: Professional Password Vault */
                        <label className="form-label" htmlFor="url">Site URL</label>
/* PassBox Manager: Professional Password Vault */
                        <input
/* PassBox Manager: Professional Password Vault */
                            type="text"
/* PassBox Manager: Professional Password Vault */
                            id="url"
/* PassBox Manager: Professional Password Vault */
                            name="url"
/* PassBox Manager: Professional Password Vault */
                            className={`form-input ${errors.url ? 'input-error' : ''}`}
/* PassBox Manager: Professional Password Vault */
                            placeholder="e.g. google.com"
/* PassBox Manager: Professional Password Vault */
                            value={formData.url}
/* PassBox Manager: Professional Password Vault */
                            onChange={handleChange}
/* PassBox Manager: Professional Password Vault */
                        />
/* PassBox Manager: Professional Password Vault */
                        {errors.url && (
/* PassBox Manager: Professional Password Vault */
                            <p className="error-text"><AlertCircle size={14} className="inline-icon" /> {errors.url}</p>
/* PassBox Manager: Professional Password Vault */
                        )}
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                    <div className="form-row">
/* PassBox Manager: Professional Password Vault */
                        <div className="form-group half-width">
/* PassBox Manager: Professional Password Vault */
                            <label className="form-label" htmlFor="username">Username</label>
/* PassBox Manager: Professional Password Vault */
                            <input
/* PassBox Manager: Professional Password Vault */
                                type="text"
/* PassBox Manager: Professional Password Vault */
                                id="username"
/* PassBox Manager: Professional Password Vault */
                                name="username"
/* PassBox Manager: Professional Password Vault */
                                className="form-input"
/* PassBox Manager: Professional Password Vault */
                                placeholder="e.g. johndoe"
/* PassBox Manager: Professional Password Vault */
                                value={formData.username}
/* PassBox Manager: Professional Password Vault */
                                onChange={handleChange}
/* PassBox Manager: Professional Password Vault */
                            />
/* PassBox Manager: Professional Password Vault */
                        </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                        <div className="form-group half-width">
/* PassBox Manager: Professional Password Vault */
                            <label className="form-label" htmlFor="email">Email</label>
/* PassBox Manager: Professional Password Vault */
                            <input
/* PassBox Manager: Professional Password Vault */
                                type="text"
/* PassBox Manager: Professional Password Vault */
                                id="email"
/* PassBox Manager: Professional Password Vault */
                                name="email"
/* PassBox Manager: Professional Password Vault */
                                className={`form-input ${errors.email ? 'input-error' : ''}`}
/* PassBox Manager: Professional Password Vault */
                                placeholder="e.g. john@example.com"
/* PassBox Manager: Professional Password Vault */
                                value={formData.email}
/* PassBox Manager: Professional Password Vault */
                                onChange={handleChange}
/* PassBox Manager: Professional Password Vault */
                            />
/* PassBox Manager: Professional Password Vault */
                            {errors.email && (
/* PassBox Manager: Professional Password Vault */
                                <p className="error-text"><AlertCircle size={14} className="inline-icon" /> {errors.email}</p>
/* PassBox Manager: Professional Password Vault */
                            )}
/* PassBox Manager: Professional Password Vault */
                        </div>
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                    <div className="form-group">
/* PassBox Manager: Professional Password Vault */
                        <label className="form-label" htmlFor="password">Password</label>
/* PassBox Manager: Professional Password Vault */
                        <input
/* PassBox Manager: Professional Password Vault */
                            type="password"
/* PassBox Manager: Professional Password Vault */
                            id="password"
/* PassBox Manager: Professional Password Vault */
                            name="password"
/* PassBox Manager: Professional Password Vault */
                            className={`form-input ${errors.password ? 'input-error' : ''}`}
/* PassBox Manager: Professional Password Vault */
                            placeholder="Enter your password"
/* PassBox Manager: Professional Password Vault */
                            value={formData.password}
/* PassBox Manager: Professional Password Vault */
                            onChange={handleChange}
/* PassBox Manager: Professional Password Vault */
                        />
/* PassBox Manager: Professional Password Vault */
                        {errors.password && (
/* PassBox Manager: Professional Password Vault */
                            <p className="error-text"><AlertCircle size={14} className="inline-icon" /> {errors.password}</p>
/* PassBox Manager: Professional Password Vault */
                        )}
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
                    <div className="form-actions">
/* PassBox Manager: Professional Password Vault */
                        <button type="submit" className="btn btn-primary btn-save">
/* PassBox Manager: Professional Password Vault */
                            <Save size={20} /> Save Password
/* PassBox Manager: Professional Password Vault */
                        </button>
/* PassBox Manager: Professional Password Vault */
                    </div>
/* PassBox Manager: Professional Password Vault */
                </form>
/* PassBox Manager: Professional Password Vault */
            </div>
/* PassBox Manager: Professional Password Vault */
        </div>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default AddSite;
