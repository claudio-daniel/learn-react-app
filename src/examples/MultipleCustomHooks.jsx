import { useFetch, useCounter } from "../hook"
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)
    const defaultUri = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const { data, isLoading, hasError } = useFetch(defaultUri)
    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button
                onClick={increment}
                className="btn btn-primary"
                disabled={isLoading}>

                Next
            </button>
        </>
    )
}