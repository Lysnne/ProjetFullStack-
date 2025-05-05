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

    const { loadDataWithPathVariable, submitNewData} = useAxios();

    useEffect(() => {
        loadDataWithPathVariable("customer", "getCustomer", setCustomer, 1)
        loadDataWithPathVariable("portfolio", "getPortfolio", setPortfolio, 1)
    }, []);

    return (
        <div>
            <div className='text-center '>
            <img 
                src="/images/search.png" alt="notportfolio" className="mx-auto mb-4" />
                <h2>We searched everywhere, but it looks like you don’t have a portfolio to continue this adventure</h2>
                <h5>Do u wanna create One?</h5>
                <div className='d-flex'>
                    <button className='btn btn-primary' onClick={() => {
                        submitNewData("portfolio", "createPortfolio", portfolio, customer.idcustomer)
                        }}>Yes</button>
                    <button className='btn btn-secondary'>No</button>
                </div>
                
            </div>


        </div>
    );
};

export default Portfolio;