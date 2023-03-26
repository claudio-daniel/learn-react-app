import { useEffect } from "react"
import { useForm } from "../hook/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const { formState, username, email, password, onInpuntChange, onResetForm } = useForm(initialForm)

    //const { username, email, password } = formState

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
            <h1>Form with custom hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInpuntChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
        </>
    )
}