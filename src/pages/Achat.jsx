import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import Panier from './Panier';


const API_URL = import.meta.env.VITE_API_URL || ""

function Achat() {
    const [stocks, setStocks] = useState([])
    const [panier, setPanier] = useState([])
    const [total, setTotal] = useState(0)


    const ajouterPanier = (stock) => {
        console.log(stock)
        if (!panier.includes(stock)) {
            setPanier(
                [
                    ...panier,
                    stock
                ]
            )
            console.log(panier)
        }
        else {
            console.log("LE STOCK SE RETROUVE DEJA EN LE PANIER")
        }
    }

    const updatePanier = (price, stock) => {
        if (!panier.includes(stock)){
            const sum = total + price
            setTotal(Math.round(sum * 100) / 100)
            }
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
                            <div key={index} className="col-3 m-2">
                                <div className="card">
                                    <div className="card-header p-1 ">
                                        {stock.name}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{stock.price}</h5>
                                        <p className="card-text">{stock.sector}</p>
                                        <button onClick={() => {
                                            ajouterPanier(stock);
                                            updatePanier(stock.price, stock)
                                        }
                                        }>Add</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

                <div className='container .d-none px-10'>
                    <div className='card col-5'>
                        <div className='card-body gap-1'>
                            <h2 className='text-center'>Balance: </h2>
                            {panier.map((panier, index) => (
                                <Panier key={index} stock={panier} total={total} />
                            ))}
                            <p className='h2 m-2'>Total: {total}</p>
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
