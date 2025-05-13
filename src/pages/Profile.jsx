import React, { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import '../styles/Profile.css';

const Profile = ({userInfo, setUserInfo, setAuth}) => {
    const [activeTab, setActiveTab] = useState('account');
    const [isEditing, setIsEditing] = useState(false);
    
    const [editedUserInfo, setEditedUserInfo] = useState(userInfo);

    
    const [customer, setCustomer] = useState({
        idcustomer: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        balance: ""
    });

    const [portfolio, setPortfolio] = useState({
        shares_owned: "",
        total_profit: "",
        total_value: "",
        id_portfolio: "",
        idcustomer: ""
    })

    const [stocks, setStocks] = useState([]);
    const { loadDataWithPathVariable } = useAxios();

    // Premier render
    useEffect(() => {
        loadDataWithPathVariable("customer", "getCustomer", setCustomer, userInfo.idcustomer)
        loadDataWithPathVariable("portfolio", "getPortfolio", setPortfolio, 1)
        loadDataWithPathVariable("transaction", "getQuantityStocksOwned", setStocks, userInfo.idcustomer)
        console.log("INFOMARTION OF USER: ", userInfo)
        setAuth(true)

    }, []);
    

    const Change = (e) => {
        const { name, value } = e.target;
        setEditedUserInfo(prev => ({//est la version précédente du statut (editedUserInfo)
            prev,//maintient toutes les valeurs précédentes
            [name]: value//remplace uniquement le champ que l'utilisateur est en train de modifier
        }));
    };

    const Save = () => {
        setUserInfo(editedUserInfo);// ce que l'utilisateur a écrit (editedUserInfo) 
        // devient maintenant sa nouvelle information stockée (userInfo).
        localStorage.setItem('loggedUser', JSON.stringify(editedUserInfo));// enregistre les nouvelles informations dans le stockage local du navigateur,
        //  afin qu'elles ne soient pas perdues si la page est rechargée.
        setIsEditing(false); //quitte le mode édition
    };

    const Edit = () => {
        setEditedUserInfo(userInfo);//copie les données de l'utilisateur actuel (userInfo) dans l'état modifiable (editedUserInfo).
        setIsEditing(true);//Activer le mode édition pour permettre à l'utilisateur de modifier les champs.
    };

    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <div className="profile-header">
                    <div className="profile-image">
                        <img src='../images/avatar icon.png' />
                    </div>
                    <h2>{userInfo?.username || 'Utilisateur'}</h2>
                    <p className="user-role">Investisseur</p>
                </div>
                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-value">{portfolio.shares_owned}</span>
                        <span className="stat-label">Total <br/> Stocks</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{portfolio.total_profit}</span>
                        <span className="stat-label">Total <br/> Profit</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{portfolio.total_value}</span>
                        <span className="stat-label">Total <br/> Value</span>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <div className="profile-tabs">
                    <button
                        /*Elle concatène la classe "tab" css avec une fonction activeTab :
                        Si l'onglet actif est "account" (donc activeTab === 'account') :
                        on ajoute "active" (classe CSS active).
                        Sinon :
                         on ajoute une chaîne vide */
                        className={`tab ${activeTab === 'account' ? 'active' : ''}`}
                        onClick={() => setActiveTab('account')}
                    >
                        Compte
                    </button>
                    <button
                        className={`tab ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Sécurité
                    </button>
                    <button
                        className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('transactions')}
                    >
                        Transactions
                    </button>
                    <button
                        className={`tab ${activeTab === 'portfolio' ? 'active' : ''}`}
                        onClick={() => setActiveTab('portfolio')}
                    >
                        Portfolio
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'account' && (
                        <div className="account-settings">
                            <div className="form-group">
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Prénom</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            /* Si isEditing est vrai, utiliser editedUserInfo.firstName (s'il existe) ( ou ''(vite) s'il n'existe pas) ;
                                            si isEditing est faux (c'est-à-dire après le :), utiliser userInfo.firstName (s'il existe, ou '' sinon) .
                                            Si on est en mode édition (isEditing === true), on affiche la valeur éditable (editedUserInfo.lastName).
                                            Sinon, on affiche juste la valeur sauvegardée (userInfo.lastName).*/
                                            value={isEditing ? editedUserInfo?.first_name || '' : userInfo?.first_name || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Nom</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={isEditing ? editedUserInfo?.lastName || '' : userInfo?.lastName || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}//Si on n’est pas en train d’éditer, alors on rend le champ non modifiable.
                                        />
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={isEditing ? editedUserInfo?.email || '' : userInfo?.email || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={isEditing ? editedUserInfo?.phone || '' : userInfo?.phone || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>

                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Ville</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={isEditing ? editedUserInfo?.city || '' : userInfo?.city || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}

                                        />
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Adresse</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={isEditing ? editedUserInfo?.address || '' : userInfo?.address || ''}
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>
                                {isEditing ? (
                                    <div className="button-group">
                                        <button className="save-btn" onClick={Save}>Save</button>
                                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                                    </div>
                                ) : (
                                    <button className="update-btn" onClick={Edit}>Edit profile</button>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'transactions' && (
                        <div className="transactions-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Montant</th>
                                        <th>Statut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map(transaction => (
                                        <tr key={transaction.id}>
                                            <td>{transaction.date}</td>
                                            <td>{transaction.type}</td>
                                            <td>{transaction.amount}</td>
                                            <td>
                                                <span className={`status ${transaction.status}`}>
                                                    {transaction.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'portfolio' && (
                        <div className="transactions-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {stocks.map((stock, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{stock.name}</td>
                                            <td>{stock.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;