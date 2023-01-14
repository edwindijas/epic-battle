import { User } from "models/types"
import { createContext, PropsWithChildren, useEffect, useReducer } from "react"
import { userReducer } from "./reducer"
import tmpUser from "mock/User.json"
import { IUserContext } from "./types"
import { getUser } from "models/Users"

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const WithUser = ({children}: PropsWithChildren) => {
    const [user, dispatch] = useReducer(userReducer, tmpUser as User);

    useEffect(() => {
        getUser().then((user) => {
            dispatch({
                action: 'addData',
                payload: {
                    data: user
                }
            })
        })
    }, [])

    return <UserContext.Provider value={{user, dispatch}} >
        { children }
    </UserContext.Provider>
}