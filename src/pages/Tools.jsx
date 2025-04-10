import { useState} from 'react';
import '../styles/Tools.css';
// import { calculerResultats } from '../composante/calculTaxes';


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

    const [employmentIncome, setEmploymentIncome] = useState('');
    const [selfEmploymentIncome, setSelfEmploymentIncome] = useState('');
    const [RRSPandFHSADeductions, setRRSPandFHSADeductions] = useState('');
    const [gainCapitalBefore, setGainCapitalBefore] = useState('');
    const [gainCapitalAfter, setGainCapitalAfter] = useState('');
    const [eligibleDividends, setEligibleDividends] = useState('');
    const [ineligibleDividends, setIneligibleDividends] = useState('');
    const [otherIncome, setOtherIncome] = useState('');
    const [incomeTaxesPaid, setIncomeTaxesPaid] = useState('');

    return (
        <div>

            <div className="container">
                <h2 className="tax-calculator-title">Calculateur d'impôt pour le Québec 2025</h2>
                <p className="tax-calculator-description">
                    Calculate your taxes easily with our tax calculator. Just enter your income and let us do the rest!
                </p>

                <div className="row tax-calculator">
                    <div className="col tax-form">
                        <div className="p-3 border rounded bg-white">
                            <h4 className="mb-3">Formulaire</h4>

                            {champs.map((champ) => {
                                let value = '';
                                let setValue = () => {};

                                switch (champ.state) {
                                case 'employmentIncome':
                                    value = employmentIncome;
                                    setValue = setEmploymentIncome;
                                    break;
                                case 'selfEmploymentIncome':
                                    value = selfEmploymentIncome;
                                    setValue = setSelfEmploymentIncome;
                                    break;
                                case 'RRSPandFHSADeductions':
                                    value = RRSPandFHSADeductions;
                                    setValue = setRRSPandFHSADeductions;
                                    break;
                                case 'gainCapitalBefore':
                                    value = gainCapitalBefore;
                                    setValue = setGainCapitalBefore;
                                    break;
                                case 'gainCapitalAfter':
                                    value = gainCapitalAfter;
                                    setValue = setGainCapitalAfter;
                                    break;
                                case 'eligibleDividends':
                                    value = eligibleDividends;
                                    setValue = setEligibleDividends;
                                    break;
                                case 'ineligibleDividends':
                                    value = ineligibleDividends;
                                    setValue = setIneligibleDividends;
                                    break;
                                case 'otherIncome':
                                    value = otherIncome;
                                    setValue = setOtherIncome;
                                    break;
                                case 'incomeTaxesPaid':
                                    value = incomeTaxesPaid;
                                    setValue = setIncomeTaxesPaid;
                                    break;
                                default:
                                    break;
                                }

                                return (
                                <div className="mb-3" key={champ.id}>
                                    <label htmlFor={champ.id} className="form-label">{champ.label}</label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    id={champ.id}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="0 $"
                                    />
                                </div>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="col tax-result">
                        <div className="tax-result-content">
                            <h4>Vos rsultat</h4>
                            <p><strong>Revenu total:</strong> {employmentIncome || '0'} $</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;
