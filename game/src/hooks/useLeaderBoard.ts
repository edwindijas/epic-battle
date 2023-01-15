import { User } from "models/types";
import { useContext } from "react"
import { LeaderBoardContext } from "services/LeaderBoard/withLeaderBoard";

export const useLeaderBoard = (): User[] => {
    const {users} = useContext(LeaderBoardContext);
    return users;
}