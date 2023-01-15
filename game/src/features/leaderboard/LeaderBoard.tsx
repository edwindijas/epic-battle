import { useLeaderBoard } from "hooks/useLeaderBoard"
import { FeatureLeaderBoardLayout } from "./layout/LeaderBoard"

export const FeatureLeaderBoard = () => {
    const users = useLeaderBoard()
    return <FeatureLeaderBoardLayout users={users.slice(0, 2)} />
}