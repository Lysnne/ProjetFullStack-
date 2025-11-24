import { useState } from 'react';
import '../styles/Tools.css';
import axios from 'axios';


const champs = [
    { id: 'employmentIncome', label: "Revenu d'emploi ($)", state: 'employmentIncome' },
    { id: 'selfEmploymentIncome', label: "Revenu de travail indépendant ($)", state: 'selfEmploymentIncome' },
    { id: 'RRSPandFHSADeductions', label: "Déductions REER/CELIAPP ($)", state: 'RRSPandFHSADeductions' },
    { id: 'gainCapitalBefore', label: "Gains en capital (avant 25 juin 2024) ($)", state: 'gainCapitalBefore' },
    { id: 'gainCapitalAfter', label: "Gains en capital (après 25 juin 2024) ($)", state: 'gainCapitalAfter' },
    { id: 'eligibleDividends', label: "Dividendes déterminés ($)", state: 'eligibleDividends' },
    { id: 'ineligibleDividends', label: "Dividendes non déterminés ($)", state: 'ineligibleDividends' },
    { id: 'otherIncome', label: "Autres revenus ($)", state: 'otherIncome' },
    { id: 'incomeTaxesPaid', label: "Impôt payé ($)", state: 'incomeTaxesPaid' }
];


function Tools() {

    const [formData, setFormData] = useState({
        employmentIncome: '',
        selfEmploymentIncome: '',
        RRSPandFHSADeductions: '',
        gainCapitalBefore: '',
        gainCapitalAfter: '',
        eligibleDividends: '',
        ineligibleDividends: '',
        otherIncome: '',
        incomeTaxesPaid: ''
    });

    
    const [result, setResult] = useState({
        totalIncome: 0,
        totalTax: 0,
        federalTax: 0,
        provTax: 0,
        afterTaxIncome: 0,
        avrgTaxRate: 0,
        marginalTaxRate: 0
      });

    const changement = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const calculer = async (e) => {
        e.preventDefault();
        try {
            //DTO
            const response = await axios.post('http://localhost:8585/tax/taxCalculate', formData);
            setResult(response.data);
        } catch (error) {
            console.error('Error calculating taxes:', error);
        }
    
    }
    return (
        <div>

            <div className="container">
                <h2 className="tax-calculator-title">Calculateur d'impôt pour le Québec 2025</h2>
                <p className="tax-calculator-description">
                Calculez facilement vos impôts grâce à notre simulateur. Indiquez simplement vos revenus et nous nous occupons du reste !
                </p>

                <div className="row tax-calculator">
                    <div className="col tax-form">
                        <div className="p-3  rounded">
                            <h4 className="mb-3">Formulaire</h4>

                            {champs.map((champ) => (
                                <div className="mb-3" key={champ.id}>
                                    <label htmlFor={champ.id} className="form-label">{champ.label}</label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    id={champ.id}
                                    value={formData[champ.id]}
                                    onChange={changement}
                                    placeholder="0 $"
                                    />
                                </div>
                                ))}
                        </div>
                    </div>

                    <div className="col tax-result">
                        <div className="tax-result-content">
                            <h2>Vos résultats</h2>
                            <hr />

                            <div className="section-title line total-bold"><span>Revenu total</span><span>{Number(result.totalIncome).toLocaleString()} $</span></div>
                            <hr />

                            <div className="section-title line total-bold"><span>Impôt total</span> <span>{Number(result.totalTax).toLocaleString()} $</span></div>
                            <div className="line"><span>Impôt fédéral</span><span>{Number(result.federalTax).toLocaleString()} $</span></div>
                            <div className="line"><span>Impôt provincial</span><span>{Number(result.provTax).toLocaleString()} $</span></div>
                            <hr />

                            <div className=""></div>
                            <div className="section-title line total-bold"><span>Revenu après impôt</span><span>{Number(result.afterTaxIncome).toLocaleString()} $</span></div>
                            <hr />

                            <div className="line"><span>Taux moyen</span><span>{Number(result.avrgTaxRate).toLocaleString()} %</span></div>
                            <div className="line"><span>Taux marginal</span><span>{Number(result.marginalTaxRate).toLocaleString()} %</span></div>

                            <hr />

                            <button className="btn btn-primary cal" id="btn-calculer" onClick={calculer}>
                            Calculer
                            </button>

                            <hr />

                            <div className="tax-summary">
                            Si vous gagnez {Number(result.totalIncome).toLocaleString()}$ par an, vous paierez environ {Number(result.totalTax).toLocaleString()}$ d’impôt. 
                            Cela vous laissera un revenu net de {Number(result.afterTaxIncome).toLocaleString()}$, soit un taux moyen de {Number(result.avrgTaxRate).toLocaleString()}%. 
                            Votre taux marginal est de {Number(result.marginalTaxRate).toLocaleString()}%.
                            </div>

                            <hr />

                            <div className="tax-note">
                            Ces calculs sont approximatifs et incluent les crédits non remboursables de base, les cotisations au RRQ/RQAP, 
                            et les primes d’assurance-emploi. Mise à jour en date de 2025.
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Tools;
