import 'react';
import { Link } from 'react-router-dom';
import '../styles/Support.css'


function Support() {
    return (
        <div>
            
            <div className="hero-content">
                <h1>Support Center</h1>
                <p>How can we help you today?</p>

                <div className="support-container">
                    <div className="support-card">
                        <h3>Orientation et Soutien</h3>
                        <p>Touver des reponses à propos de votre compte? Nous sommes là pour vous aider.</p>
                        <Link to="/InfoSupport" className="btn btn-secondary arrow-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24L9.8625 21.9L18.2625 13.5Z" fill="currentColor" />
                            </svg>
                        </Link>
                    </div>

                    <div className="support-card">
                        <h3>Contact Us</h3>
                        <p>Vous pouvez joindre notre équipe de support au 1-385-555-0101
                            
                            Du lundi au vendredi : 9h00 - 17h00
                            Samedi et dimanche : nous sommes fermés

                        </p>

                    </div>

                    <div className="support-card">
                        <h3>Soutien impôt</h3>
                        <p>Des questions sur Assetra Impôt? Écrivez-nous à tax@assetra.com - l'assistance téléphonique n'est pas disponible.</p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Support;