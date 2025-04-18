import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function Panier({ stock, total }) {
    const { counter, increase, decrement } = useCounter();

    const [price, setPrice] = useState(stock.price); 
    
    const add = () => {
        setPrice(Math.round((price + total) * 100) / 100);
    }
    const minus = () => {
        setPrice(Math.round((price - total) * 100) / 100);
    }

    return (
        <div className="d-flex gap-2 align-items-center">
            <p>{stock.name}</p>
            <p>{price}</p> 
            <div className="d-flex align-items-center">
                <button onClick={() => {increase(); add();}} className="btn btn-sm btn-primary">+</button>
                <p className="mx-2">{counter}</p>
                <button onClick={() => {decrement(); minus();}} className="btn btn-sm btn-secondary">-</button>
            </div>
        </div>
    );
}

export default Panier;
