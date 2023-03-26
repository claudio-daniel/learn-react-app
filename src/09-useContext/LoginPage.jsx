import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const userLogin = {

    id: "641fcb64bd087841e9e33757",
    completeName: "Valeria Romagnoli",
    username: "valeroma",
    password: "123456",
    roles: []
}

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                <h3>{`Hi ${user?.completeName}`}</h3>
            </pre>


            <pre>
                <h3>is this your information?</h3>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser(userLogin)}
            >Login</button>
        </>
    )
}
