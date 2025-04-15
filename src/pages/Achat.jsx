import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || ""

function Achat() {
    const [stocks, setStocks] = useState([])


    useEffect(() => {
        loadStock();
    }, []);


    const loadStock = async (aqsd) => {
        try {

            const url = `${API_URL}/stock/getAllStocks`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            setStocks(result.data);
        }
        catch (error) {
            console.error("Eror loading stocks:", error)
        }
    };

    return (
        <div className="row text-center p-4">
        {stocks.map((stock, index) => (
            <div key={index} className="col-3 m-2">
                <div className="card">
                    <div className="card-header p-3">
                        {stock.name} 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{stock.price}</h5> 
                        <p className="card-text">{stock.sector}</p>
                    </div>
                </div>
            </div>
        ))}
    
        <div className="col-3 ">
            <div className="card">
                <div className="card-body">
                    
                    <button className='btn-primary py-1'>Buy</button>
                    <button className='btn-secondary py-1'>Sell</button>
                </div>
            </div>
        </div>
    </div>
    
        

    );
}

export default Achat
