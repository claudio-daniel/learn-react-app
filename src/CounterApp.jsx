import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const add = (event) => {
        setCounter(counter + 1)
    }

    const minus = () => {
        setCounter(counter - 1)

    }

    const reset = () => {
        setCounter(() => value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={add}> +1 </button>

            <button onClick={minus}> -1 </button>

            <button onClick={reset}> reset </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}