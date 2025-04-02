import 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


function Market() {

    const {id} = useParams();

    const [stock, setStock] = useState({
        symbol: "",
        name: "",
        price: "",
        sector: "",
        volume: "",
        marketcap: ""
    });

    useEffect(() => {
        loadStock();
    }, []);


    const loadStock = async () => {
        const result = await axios.get(`http://localhost:8585/stock/getstock/1`);
        console.log("Data received:", result.data)
        setStock(result.data);
    };


    return (
        <div>
            <h1>Market</h1>
            <h2>{stock.name} ({stock.symbol})</h2>
            <p>Price: {stock.price}</p>
            <p>Sector: {stock.sector}</p>
            <p>Volume: {stock.volume}</p>
            <p>Market Cap: {stock.marketcap}</p>
        </div>
    );
}

export default Market;