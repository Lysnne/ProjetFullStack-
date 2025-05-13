import 'react';
import axios from 'axios';
import '../styles/Market.css'
import { useEffect, useState } from "react";

import useAxios from "../hooks/useAxios";


const API_URL = import.meta.env.VITE_API_URL || ""

function Market() {

    const [stocks, setStocks] = useState([])
    
    const { loadData } = useAxios();


    useEffect(() => {
        loadData("stock", "getAllStocks", setStocks)
    }, []);




    return (

        
        <div className="container mt-4">
            <h1>Market</h1>

            <h4>Sort By: </h4>
            <div className="d-flex gap-2 mb-3">
                <button onClick={() => loadData("stock", "getAllStocksSortedByPrice", setStocks)} className="btn btn-primary">Price</button> 
                <button onClick={() => loadData("stock", "getAllStocksSortedByName", setStocks)} className="btn btn-primary">Name</button> 
                <button onClick={() => loadData("stock", "getAllStocksSortedByVolume", setStocks)} className="btn btn-primary">Volume</button> 
                <button onClick={() => loadData("stock", "getAllStocksSortedByMarketCap", setStocks)} className="btn btn-primary">Market Cap</button> 
            </div> 

            <div className="card w-100 mb-2" >
                <div className="card-body card">
                    <div className="row fw-bold text-uppercase border-bottom pb-2">
                        <div className="col-1">#</div>
                        <div className="col-2">Name</div>
                        <div className="col-1">Symbol</div>
                        <div className="col-1">Price</div>
                        <div className="col-3">Sector</div>
                        <div className="col-2">Volume</div>
                        <div className="col-2">Market Cap</div>
                    </div>

                    {stocks.map((stock, index) => (
                        <div key={index} className="row py-2 border-bottom align-items-center">
                            <div className="col-1">{index + 1}</div>
                            <div className="col-2">{stock.name}</div>
                            <div className="col-1">{stock.symbol}</div>
                            <div className="col-1">${stock.price}</div>
                            <div className="col-3">{stock.sector}</div>
                            <div className="col-2">{stock.volume}</div>
                            <div className="col-2">{stock.marketcap}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Market;