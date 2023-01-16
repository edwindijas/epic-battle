import { User } from "models/types"
import { createContext, PropsWithChildren, useCallback, useEffect, useReducer } from "react"
import { leaderboardReducer } from "./reducer"
import { ILeaderBoardContext, WithLeaderBoardProps } from "./types"
import { getLeaderBoard } from "models/LeaderBoard"

export const LeaderBoardContext = createContext<ILeaderBoardContext>({} as ILeaderBoardContext)

export const WithLeaderBoard = ({children, userData}: PropsWithChildren & WithLeaderBoardProps) => {
    const [users, dispatch] = useReducer(leaderboardReducer, userData);

    const getUsers = useCallback(() => {
        getLeaderBoard().then((users) => {
            dispatch({
                action: 'addData',
                payload: {
                    data: users
                }
            })
        });
    }, [])

    useEffect(() => {
        const interval = window.setTimeout(getUsers, 60000);
        return  () => {
            window.clearInterval(interval);
        }
    }, [])

    return <LeaderBoardContext.Provider value={{users, dispatch}} >
        { children }
    </LeaderBoardContext.Provider>
}