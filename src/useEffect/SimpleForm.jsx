import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'claudio',
        email: 'claudio@gmail.com'
    })

    const { username, email } = formState

    const onInpuntChange = ({ target }) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('use effect called')
    }, [])

    useEffect(() => {
        console.log('form changed')
    }, [formState])

    useEffect(() => {
        console.log('email changed')
    }, [email])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInpuntChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="alguien@gmail.com"
                name="email"
                value={email}
                onChange={onInpuntChange}
            />

            {
                (username == 'strider2') && <Message></Message>
            }
        </>
    )
}