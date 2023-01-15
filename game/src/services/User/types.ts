import { User } from "models/types"
import { Dispatch } from "react"

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

export interface WithUserProps {
    userData: User
}