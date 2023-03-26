import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1>Home Page</h1>
            <hr />

            <h3>Congrats you are login success</h3>
            <pre>
                <h3>Your information is:</h3>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
