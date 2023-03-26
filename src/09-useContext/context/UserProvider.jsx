import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {

//     id: "641fcb64bd087841e9e33757",
//     completeName: "Valeria Romagnoli",
//     username: "valeroma",
//     password: "123456",
//     roles: []
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
