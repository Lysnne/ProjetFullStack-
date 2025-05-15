
import { useEffect, useState } from "react";
import Cart from '../components/Cart';

import useCart from "../hooks/useCart";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";



function Trade({userInfo, setUserInfo, auth}) {
    const [totalAfterFee, setTotalAfterFee] = useState(0);
    const [commision, setCommision] = useState(0)
    const [stocks, setStocks] = useState([])
    const [isConfirm, setIsConfirm] = useState(false)
    const [transactions, setTransactions] = useState([])
    const navigate = useNavigate();
    

    // Custom Hooks
    const { cart, addToCart, removeToCart, sumTotal, subtractTotal, total, setTotal, incrementPrice, decrementPrice, quantity } = useCart();
    const { loadData, loadDataWithPathVariable, submitNewTransaction, updateData } = useAxios();

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

    const [transaction, setTransaction] = useState({
        idportfolio: "",
        shares: "",
        price_per_share: "",
        transaction_fee: "",
        net_amount: "",
        order_type: ""
    });

    // Render seulement dans le premier render
    useEffect(() => {        
        console.log(auth)
        if(!auth) {
            navigate("/")
        }
        else{
            loadDataWithPathVariable("customer", "getCustomer", setCustomer, userInfo.idcustomer)
            loadData("stock", "getAllStocks", setStocks)
            loadDataWithPathVariable("transaction", "getAllTransactionsById", setTransactions, userInfo.idcustomer)  
        }
        
    }, []);

    useEffect(() => {
        transactionFee(total);
    }, [total]);

    const transactionFee = (total) => {
        let commisionRate = 0
        if (total < 250) {
            commisionRate = 2.5 / 100
        }
        else if (total < 1250) {
            commisionRate = 7.5 / 100
        }
        else if (total < 2500) {
            commisionRate = 12.5 / 100
        }
        else if (total < 5000) {
            commisionRate = 25 / 100
        }
        else {
            commisionRate = 50 / 100
        }

        Math.floor(Math.random())
        setCommision(commisionRate)

        const fee = total * commisionRate
        const newTotal = total + fee

        setTotalAfterFee(Math.round(newTotal * 100) / 100);
    }

    const Buy = () => {
        if (customer.balance >= total) {
            // mappage du panier 
            cart.map((stock) => {
                if (!isConfirm) {
                    // Creating new Transaction
                    setTransaction({
                        ...transaction,
                        shares: quantity,
                        price_per_share: stock.price,
                        transaction_fee: commision,
                        net_amount: totalAfterFee,
                        order_type: "BUY",
                    })
                    // Updating volume du customer
                    setCustomer({
                        ...customer,
                        balance: customer.balance - totalAfterFee
                    })
                    setIsConfirm(true)
                }
            });
        }
        else {
            alert("You need more money!")
        }

    };

    useEffect(() => {
        if (isConfirm) {
            cart.map((stock) => {
                console.log(stock)
                console.log(stock.idstock)
                console.log("New Transaction: ", transaction)
                submitNewTransaction("transaction", "createTransaction", transaction, userInfo.idcustomer, stock.idstock)
            })
            console.log("Update Customer:", customer)
            updateData("customer", "updateBalance", customer.idcustomer, customer)
            setUserInfo(customer)
            navigate("/")
        }
    }, [transaction, customer])

    return (
        <div>
            <h1 className='text-center'>Buy or Sell stocks</h1>
            <h2>Ready to trade? {userInfo?.username || 'Utilisateur'}</h2>
            <div className='d-flex'>
                <div className="container ms-5">
                    <div className='row justify-content-center'>
                        {stocks.map((stock, index) => (
                            <div key={index} className="col-sm-4 m-2">
                                <div className="card">
                                    <div className="card-title p-1 h4">
                                        {stock.name}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{stock.price}</h5>
                                        <p className="card-text">{stock.sector}</p>
                                        <div className='d-flex '>
                                            <button className='btn btn-primary btn-sm' onClick={() => {
                                                addToCart(stock);
                                                sumTotal(stock);
                                            }
                                            }>Add</button>

                                            <button className='btn btn-secondary btn-sm' onClick={() => {
                                                removeToCart(stock)
                                                subtractTotal(stock)
                                            }
                                            }>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container .d-none px-10'>
                    {cart.length > 0 && (
                        <div className='card col-5'>
                            <div className='card-header'>
                                <h2>Balance: ${customer.balance}</h2>
                            </div>
                            <div className='card'>
                                <div className='card-body gap-1'>
                                    {cart.map((cartItem, index) => (
                                        <Cart key={index + 1}
                                            cartItem={cartItem}
                                            incrementPrice={incrementPrice}
                                            decrementPrice={decrementPrice}
                                            removeToCart={removeToCart}
                                        />
                                    ))}
                                </div>
                                <div className='card-footer text-muted'>
                                    <p className='h5 m-2'>Total: {total}</p>
                                    <p className='h5 m-2'>Commision: {commision * 100 + "%"}</p>
                                    <p className='h5 m-2'>quantity of shares: {quantity}</p><br></br>
                                    <p className='h3 m-2'>Total after fee: ${totalAfterFee.toFixed(2)}</p>
                                    <div className=' gap-4'>
                                        <button className='btn btn-primary btn-sm h5' onClick={() => {
                                            Buy();
                                        }}>Buy</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Trade;
