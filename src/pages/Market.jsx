import 'react';
import axios from 'axios';
import { useEffect, useState } from "react";


const API_URL = import.meta.env.VITE_API_URL || ""

function Market() {

    const [stocks, setStocks] = useState([])


    useEffect(() => {
        loadStock("AllStocks");
    }, []);


    const loadStock = async (dataType) => {
        try {

            const url = `${API_URL}/stock/get${dataType}`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            setStocks(result.data);
        }
        catch (error) {
            console.error("Eror loading stocks:", error)
        }
    };



    return (
        <div className="container mt-4">
            <h1>Market</h1>

            <h4>Sort By: </h4>
            <div className="d-flex gap-2 mb-3">

                <button onClick={() => loadStock("AllStocksSortedByPrice")} className="btn btn-primary">Price</button> 
                <button onClick={() => loadStock("AllStocksSortedByName")} className="btn btn-primary">Name</button>
                <button onClick={() => loadStock("AllStocksSortedByVolume")} className="btn btn-primary">Volume</button>
                <button onClick={() => loadStock("AllStocksSortedByMarketCap")} className="btn btn-primary">Market Cap</button>

            </div>

            <div className="card w-100 mb-2" >
                <div className="card-body">
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
                        <div key={stock.symbol} className="row py-2 border-bottom align-items-center">
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