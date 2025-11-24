import React, { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import '../styles/Profile.css';


const Profile = ({ userInfo, setUserInfo}) => {
    const [activeTab, setActiveTab] = useState('account');
    const [isEditing, setIsEditing] = useState(false);


    const [editedUserInfo, setEditedUserInfo] = useState({
        first_name: userInfo?.first_name || '',
        last_name: userInfo?.last_name || '',
        email: userInfo?.email || '',
        phone: userInfo?.phone || '',
        username: userInfo?.username || '',
        date_of_birth: userInfo?.date_of_birth || '',
        password: userInfo?.password || ''
    });


    const [portfolio, setPortfolio] = useState({
        shares_owned: "",
        total_profit: "",
        total_value: "",
        id_portfolio: "",
        idcustomer: ""
    })

    const [stocks, setStocks] = useState([]);
    const { loadDataWithPathVariable, updateData } = useAxios();


    // Premier render
    useEffect(() => {
        console.log(userInfo)
        loadDataWithPathVariable("portfolio", "getPortfolio", setPortfolio, userInfo.idcustomer);
        loadDataWithPathVariable("transaction", "getQuantityStocksOwned", setStocks, userInfo.idcustomer);
        loadDataWithPathVariable("transaction", "getAllTransactionsById", setTransactions, userInfo.idcustomer)
    }, []);



    const [transactions, setTransactions] = useState([]);

    const Change = (e) => {
        const { name, value } = e.target;
        setEditedUserInfo(prev => ({//est la version précédente du statut (editedUserInfo)
            ...prev,//maintient toutes les valeurs précédentes
            [name]: value//remplace uniquement le champ que l'utilisateur est en train de modifier
        }));
    };

    const Save = () => {
        setUserInfo(editedUserInfo);// ce que l'utilisateur a écrit (editedUserInfo) 
        // devient maintenant sa nouvelle information stockée (userInfo).
        localStorage.setItem('loggedUser', JSON.stringify(editedUserInfo));
        updateData("customer", "customers", userInfo.idcustomer , editedUserInfo)// enregistre les nouvelles informations dans le stockage local du navigateur,
        //  afin qu'elles ne soient pas perdues si la page est rechargée.
        setIsEditing(false); //quitte le mode édition
        //envoie les nouvelles informations à l'API pour mettre à jour le profil de l'utilisateur.
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
                        <span className="stat-label">Total <br /> Stocks</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{portfolio.total_profit}</span>
                        <span className="stat-label">Total <br /> Profit</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{portfolio.total_value}</span>
                        <span className="stat-label">Total <br /> Value</span>
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
                                            name="first_name"
                                            /* Si isEditing est vrai, utiliser editedUserInfo.firstName (s'il existe) ( ou ''(vite) s'il n'existe pas) ;
                                            si isEditing est faux (c'est-à-dire après le :), utiliser userInfo.firstName (s'il existe, ou '' sinon) .
                                            Si on est en mode édition (isEditing === true), on affiche la valeur éditable (editedUserInfo.lastName).
                                            Sinon, on affiche juste la valeur sauvegardée (userInfo.lastName).*/
                                            value={ editedUserInfo.first_name}
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Nom</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={editedUserInfo.last_name }
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
                                            value={editedUserInfo.email }
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={editedUserInfo.phone  }
                                            onChange={Change}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>

                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={editedUserInfo.username  }
                                            onChange={Change}
                                            readOnly={!isEditing}

                                        />
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Date d'annivairsaire</label>
                                        <input
                                            type="date"
                                            name="date_of_birth"
                                            value={ editedUserInfo.date_of_birth  }
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
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Montant</th>
                                        <th>Statut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td>{index +1}</td>
                                            <td>{transaction.transaction_date}</td>
                                            <td>{transaction.order_type}</td>
                                            <td>{transaction.net_amount}</td>
                                            <td>
                                                <span className={`status ${transaction.transaction_status}`}>
                                                    {transaction.transaction_status}
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
                                        <th>Quantity</th>
                                        <th>Total</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {stocks.map((stock, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{stock.stock.name}</td>
                                            <td>{stock.quantity}</td>
                                            <td>{stock.totalValue}</td>
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