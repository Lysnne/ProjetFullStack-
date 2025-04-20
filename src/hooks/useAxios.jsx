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
        stock_id_stock: "",
        shares: "",
        price_per_share: "",
        transaction_fee: "",
        net_amount: "",
        order_type: "",
        transaction_date: "",
        transaction_status: ""
    });

    const navigate = useNavigate();

    // GET

    const loadStock = async () => {
        try {
            const url = `${API_URL}/stock/getAllStocks`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            setStocks(result.data);
        }
        catch (error) {
            console.log("Error loading stocks:", error)
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
    const submitNewTransaction = () => {
        const url = `${API_URL}/transaction/createTransaction`
        axios.post(url, transaction)
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
        submitNewTransaction
    };
    
};

export default useAxios;