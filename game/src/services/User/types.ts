import { User } from "models/types"
import { type } from "os"
import { Dispatch } from "react"

export interface WithuserProps {
    
}




export interface FetchUser {
    action: 'addData',
    payload: {
        data: User
    }
}

export type UserActions = FetchUser

export type UserReducer = (state: User, action: UserActions) => User


export interface IUserContext  {
    user: User,
    dispatch: Dispatch<UserActions>
}