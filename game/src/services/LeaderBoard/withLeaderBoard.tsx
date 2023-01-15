import { User } from "models/types"
import { createContext, PropsWithChildren, useEffect, useReducer } from "react"
import { leaderboardReducer } from "./reducer"
import { ILeaderBoardContext } from "./types"
import { getLeaderBoard } from "models/LeaderBoard"

export const LeaderBoardContext = createContext<ILeaderBoardContext>({} as ILeaderBoardContext)

export const WithLeaderBoard = ({children}: PropsWithChildren) => {
    const [users, dispatch] = useReducer(leaderboardReducer, [] as User[]);

    useEffect(() => {
        getLeaderBoard().then((users) => {
            dispatch({
                action: 'addData',
                payload: {
                    data: users
                }
            })
        })
    }, [])

    return <LeaderBoardContext.Provider value={{users, dispatch}} >
        { children }
    </LeaderBoardContext.Provider>
}