import { User } from "models/types"
import { type } from "os"
import { Dispatch } from "react"

export interface WithuserProps {
    
}


export interface AddToLeaderboard {
    action: 'addData',
    payload: {
        data: User[]
    }
}

export type LeaderBoardActions = AddToLeaderboard

export type LeaderBoardReducer = (state: User[], action: LeaderBoardActions) => User

export interface ILeaderBoardContext  {
    users: User[],
    dispatch: Dispatch<LeaderBoardActions>
}