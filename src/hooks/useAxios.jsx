import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || ""

const useAxios = () => {
    const [stocks, setStocks] = useState([])

    const [customer, setCustomer] = useState({
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
       // idstock: "",
        shares: "",
        price_per_share: "",
        transaction_fee: "",
        net_amount: "",
        order_type: "",
        transaction_date: "",
        transaction_status: ""
    });

    const [idstock, setIdStock] = useState("")

    const navigate = useNavigate();

    // GET

    const loadStock = async (model, request, usestate) => {
        try {
            const url = `${API_URL}/${model}/${request}`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            const state = "set" + usestate
            set(result.data);
        }
        catch (error) {
            console.log("Error loading Data:", error)
        }
    };

    const loadCustomer = async (id) => {
        try {
            const url = `${API_URL}/customer/getCustomer/${id}`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            setCustomer(result.data)
        }
        catch (error) {
            console.error("Eror loading customer info:", error)
        }
    };

    // CREATE 
    const submitNewTransaction = (tran, id) => {
        const url = `${API_URL}/transaction/createTransaction/${id}`
        console.log(url)
        axios.post(url, tran)
            .then(() => {
                navigate("/")
            }).catch((error) => {
                console.log(error);
            });

            
        
    }

    return {
        stocks,
        customer,
        transaction,
        setTransaction,
        loadCustomer,
        loadStock,
        submitNewTransaction,
        idstock
    };
    
};

export default useAxios;