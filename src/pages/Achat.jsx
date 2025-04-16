import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter"

const API_URL = import.meta.env.VITE_API_URL || ""

function Achat() {
    const [stocks, setStocks] = useState([])
    const [panier, setPanier] = useState([])
    const { counter, increase, decrement, reset } = useCounter()

    

    const ajouterPanier = (stock) => {
        console.log(stock)
        setPanier(
            [
                ...panier,
                stock
            ]
        )
        console.log(panier)
    }

    useEffect(() => {
        loadStock();
    }, []);


    const loadStock = async () => {
        try {

            const url = `${API_URL}/stock/getAllStocks`
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            setStocks(result.data);
        }
        catch (error) {
            console.log("Eror loading stocks:", error)
        }
    };

    return (
        <div>
            <h1 className='text-center'>Buy or Sell stocks</h1>
            <div className='d-flex'>
                <div className="container ">
                    <div className='row'>
                        {stocks.map((stock, index) => (
                            <div key={index} className="col-4 m-2">
                                <div className="card">
                                    <div className="card-header p-1 ">
                                        {stock.name}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{stock.price}</h5>
                                        <p className="card-text">{stock.sector}</p>
                                        <button onClick={() => ajouterPanier(stock)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

                <div className='container'>
                    <div className='card '>
                        <div className='card-body gap-1'>
                            {panier.map((p, index) => (
                                <div className='d-flex gap-2'>
                                    <p>{p.name}</p>
                                    <button onClick={increase} className='h6 text-white'>+</button>
                                    <p className='m-2'>{counter}</p>
                                    <button onClick={decrement} className='h6 text-white'>-</button>
                                </div>
                            ))}

                            <div className='d-flex gap-4'>
                                <button className='btn-primary btn-sm h5' onClick={() => console.log(panier)}>Buy</button>
                                <button className='btn-secondary btn-sm h5'>Sell</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    );
}

export default Achat
