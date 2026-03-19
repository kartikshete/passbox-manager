/* PassBox Manager: Professional Password Vault */
import React from 'react';
/* PassBox Manager: Professional Password Vault */
import { useNavigate } from 'react-router-dom';
/* PassBox Manager: Professional Password Vault */
import { ArrowRight, ShieldCheck, Lock, Database } from 'lucide-react';
/* PassBox Manager: Professional Password Vault */
import './Home.css';
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
const Home = () => {
/* PassBox Manager: Professional Password Vault */
    const navigate = useNavigate();
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
    return (
/* PassBox Manager: Professional Password Vault */
        <div className="home-page animate-fade-in">
/* PassBox Manager: Professional Password Vault */
            <section className="hero-section container">
/* PassBox Manager: Professional Password Vault */
                <div className="hero-content">
/* PassBox Manager: Professional Password Vault */
                    <h1 className="hero-title">
/* PassBox Manager: Professional Password Vault */
                        Secure Your Digital Life with <span className="highlight">PassBox</span>
/* PassBox Manager: Professional Password Vault */
                    </h1>
/* PassBox Manager: Professional Password Vault */
                    <p className="hero-subtitle">
/* PassBox Manager: Professional Password Vault */
                        The simple, secure, and smart way to manage your passwords and sites.
/* PassBox Manager: Professional Password Vault */
                        Local storage based - your data never leaves your device.
/* PassBox Manager: Professional Password Vault */
                    </p>
/* PassBox Manager: Professional Password Vault */
                    <button className="btn btn-brand btn-lg" onClick={() => navigate('/manager')}>
/* PassBox Manager: Professional Password Vault */
                        Start now <ArrowRight size={20} />
/* PassBox Manager: Professional Password Vault */
                    </button>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            </section>
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
            <section className="features-section container">
/* PassBox Manager: Professional Password Vault */
                <div className="feature-card">
/* PassBox Manager: Professional Password Vault */
                    <div className="feature-icon"><Database size={24} /></div>
/* PassBox Manager: Professional Password Vault */
                    <h3>Local Storage</h3>
/* PassBox Manager: Professional Password Vault */
                    <p>Your passwords are stored locally in your browser. No external servers.</p>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
                <div className="feature-card">
/* PassBox Manager: Professional Password Vault */
                    <div className="feature-icon"><ShieldCheck size={24} /></div>
/* PassBox Manager: Professional Password Vault */
                    <h3>Secure & Private</h3>
/* PassBox Manager: Professional Password Vault */
                    <p>You have full control over your data. Delete anytime.</p>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
                <div className="feature-card">
/* PassBox Manager: Professional Password Vault */
                    <div className="feature-icon"><Lock size={24} /></div>
/* PassBox Manager: Professional Password Vault */
                    <h3>Easy Management</h3>
/* PassBox Manager: Professional Password Vault */
                    <p>Add, edit, and search through your sites with ease.</p>
/* PassBox Manager: Professional Password Vault */
                </div>
/* PassBox Manager: Professional Password Vault */
            </section>
/* PassBox Manager: Professional Password Vault */
        </div>
/* PassBox Manager: Professional Password Vault */
    );
/* PassBox Manager: Professional Password Vault */
};
/* PassBox Manager: Professional Password Vault */

/* PassBox Manager: Professional Password Vault */
export default Home;
