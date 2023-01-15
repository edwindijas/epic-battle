import { User } from "models/types"
import { createContext, PropsWithChildren, useEffect, useReducer } from "react"
import { userReducer } from "./reducer"
import tmpUser from "mock/User.json"
import { IUserContext, WithUserProps } from "./types"
export const UserContext = createContext<IUserContext>({} as IUserContext)

export const WithUser = ({children, userData}: PropsWithChildren & WithUserProps) => {
    const [user, dispatch] = useReducer(userReducer, userData as User);
    return <UserContext.Provider value={{user, dispatch}} >
        { children }
    </UserContext.Provider>
}