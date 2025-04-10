import 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Market() {

    const { id } = useParams();

    const [stock, setStock] = useState({
        symbol: "",
        name: "",
        price: "",
        sector: "",
        volume: "",
        marketcap: ""
    });

    const [stocks, setStocks] = useState([])


    useEffect(() => {
        loadStock();
    }, []);


    const loadStock = async () => {
        const result = await axios.get(`http://localhost:8585/stock/getAllStocks`);
        console.log("Data received:", result.data)
        setStocks(...stocks, result.data);
    };


    return (
        <div className="container mt-4">
            <h1>Market</h1>

            <div className="d-flex gap-2 mb-3">
                <button className="btn btn-primary">Top</button>
                <button className="btn btn-primary">Trending</button>
                <button className="btn btn-primary">Gainers</button>
                <button className="btn btn-primary">Losers</button>
                <button className="btn btn-primary">New</button>

            </div>

            <div className="card w-100 mb-2" >
                <div className="card-body">
                    <div className="row fw-bold text-uppercase border-bottom pb-2">
                        <div className="col-1">#</div>
                        <div className="col-3">Name</div>
                        <div className="col-2">Symbol</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Volume</div>
                        <div className="col-2">Market Cap</div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-1">{stock.id}</div>
                        <div className="col-3">{stock.name}</div>
                        <div className="col-2">{stock.symbol}</div>
                        <div className="col-2">{stock.price}</div>
                        <div className="col-2">{stock.volume}</div>
                        <div className="col-2">{stock.marketcap}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Market;