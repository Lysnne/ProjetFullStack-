import React, { useState } from "react";

const useCart = () => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0)

     // Ajouter un stock au panier
     const addToCart = (stock) => {
        if (!cart.includes(stock)) {
            setCart(
                [
                    ...cart,
                    stock
                ]
            )
            console.log("Stock added succesfully!")
            setQuantity(prevQuantity => prevQuantity + 1);
            console.log(cart)
        }
        else {
            alert("This stock is already in your cart")
        }

    }

    // Supprimer un stock du panier
    const removeToCart = (stock) => {
        if (cart.includes(stock)) {
            setCart(
                [
                    ...cart.filter(item => item !== stock)
                ]
            )
            console.log("Stock removed sucessfully!")
        }
        setQuantity(prevQuantity => prevQuantity - 1);

    }

    // Mettre a jour le total
    const sumTotal = (stock) => {
        console.log(cart)
        if (!cart.includes(stock)) {
            const sum = total + stock.price
            setTotal(Math.round(sum * 100) / 100)
        }
    }

    const subtractTotal = (stock) => {
        if (cart.length > 0) {
            console.log("test")
            const minus = total - stock.price
            setTotal(Math.round(minus * 100) / 100)
        }

    }

    const incrementPrice = (price) => {
        setTotal(PrevTotal => Math.round((PrevTotal + price) * 100) / 100)
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decrementPrice = (price) => {
        setTotal(PrevTotal => Math.round((PrevTotal - price) * 100) / 100)
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    return {
        cart,
        addToCart,
        removeToCart,
        sumTotal,
        subtractTotal,
        incrementPrice,
        decrementPrice,
        total,
        setTotal,
        quantity
    };
};

export default useCart;