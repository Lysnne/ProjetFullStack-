import React, { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

function Cart({ cartItem, incrementPrice, decrementPrice, removeToCart}) {

    const {counter, increase, decrement} = useCounter()

    useEffect(() => {
        if (counter == 0) {
            removeToCart(cartItem)
        }

    }, [counter]);


    return (
        <div>
            {counter > 0 &&(
                <div className="d-flex gap-2 align-items-center">
                    <p>{cartItem.name}</p>
                    <p>{cartItem.price}</p>
                    <div className="d-flex align-items-center">
                        <button onClick={() => { increase(); incrementPrice(cartItem.price) }} className="btn btn-sm btn-primary">+</button>
                        <p className="mx-2">{counter}</p>
                        <button onClick={() => { decrement(); decrementPrice(cartItem.price) }} className="btn btn-sm btn-secondary">-</button>
                    </div>
                </div>

            )}
        </div>


    );
}

export default Cart;
