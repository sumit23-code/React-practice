import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(1);
    const [greeting, setGreeting] = useState("hello everyone");
    console.log(counter,"counter")
    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    }
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    const reset = () => {
        setCounter(1);
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={() => setGreeting("Wellcome to my WebPage")}>Chnage Greeting</button>
            <h2>Counter :{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseState
