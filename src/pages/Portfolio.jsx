import React from 'react';
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

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

    const { loadData, loadDataWithPathVariable } = useAxios();

    useEffect(() => {
        loadDataWithPathVariable("customer", "getCustomer", setCustomer, 1)
        loadDataWithPathVariable("portfolio", "getPortfolio", setPortfolio, 1)
    }, []);

    return (
        <div>
            <div>
                <h1>It seems that there is no portfolio</h1>
                <p>Do u wanna create One?</p>
                <button>Yes</button>
            </div>


        </div>
    );
};

export default Portfolio;