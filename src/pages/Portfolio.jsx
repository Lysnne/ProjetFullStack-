import React from 'react';
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const API_URL = import.meta.env.VITE_API_URL || ""

const Portfolio = () => {
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
        id_portfolio: "",
        idcustomer: ""
    })

    const [transactions, setTransactions] = useState([])
    const [stocks, setStocks] = useState([])
    const [owned, setOwned] = useState([])

    const { loadDataWithPathVariable, loadData } = useAxios();

    useEffect(() => {
        loadDataWithPathVariable("customer", "getCustomer", setCustomer, 1)
        loadDataWithPathVariable("portfolio", "getPortfolio", setPortfolio, 1)
        loadDataWithPathVariable("transaction", "getAllTransactionsById", setTransactions, 1)
        loadData("stock", "getAllStocks", setStocks)
    }, []);

    return (
        <div>
           
            <div>
                <h3>Shares owned: {portfolio.shares_owned}</h3>
                <h3>Total of profit: {portfolio.total_profit}</h3>
                <h3>Total value: {portfolio.total_value}</h3>
            </div>

            <div className="card w-50 text-center">
                <div className="card-body card">
                    <div className="row fw-bold text-uppercase border-bottom pb-2">
                        <div className="col-1">#</div>
                        <div className="col-2">Name</div>
                        <div className="col-1">Price</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-3">Total</div>

                    </div>

                    {owned.map((own, index) => (
                        <div key={index} className="row py-2 border-bottom align-items-center">
                            <div className="col-1">{index + 1}</div>
                            <div className="col-2">{own.name}</div>
                            <div className="col-1">${own.price}</div>
                            <div className="col-3">{own.sector}</div>
                            <div className="col-3">{own.sector}</div>
                        </div>
                    ))}
                </div>
            </div>

            


        </div>
    );
};

export default Portfolio;