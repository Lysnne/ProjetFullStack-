import React from 'react';

function InfoSupport() {
    return (
        <div>
            <div className="info-content">
                    <h1 className='title2'>Guide Finance pour Débutants</h1>
                    
                    <div className="info-grid">
                        <div className="info-card">
                            <h2>Les Bases de l'Épargne</h2>
                            <img src ='../images/coin.png' className='imm'/>
                            <p>Apprenez à gérer votre argent efficacement et à créer un fonds d'urgence.</p>
                            <ul>
                                <li>Établir un budget mensuel</li>
                                <li>La règle 50/30/20</li>
                                <li>L'importance du fonds d'urgence</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <h2>Investissement pour Débutants</h2>
                            <img src='../images/Information security and data protection.png'   />
                            <p>Découvrez les principes fondamentaux de l'investissement.</p>
                            <ul>
                                <li>Les différents types d'investissements</li>
                                <li>Comment diversifier son portefeuille</li>
                                <li>Les risques et rendements</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <h2>Gestion des Dettes</h2>
                            <img src='../images/diskette.png'/>
                            <p>Stratégies pour gérer et réduire vos dettes efficacement.</p>
                            <ul>
                                <li>Prioriser vos dettes</li>
                                <li>Méthodes de remboursement</li>
                                <li>Éviter les pièges du crédit</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default InfoSupport;