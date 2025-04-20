import React, { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const increase = () => setCounter(prevCount => prevCount + 1)
    const decrement = () => setCounter(prevCount => prevCount - 1)

    return {
        counter,
        increase,
        decrement
    }
}

export default useCounter;