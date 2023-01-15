import {produce} from "immer";
import { User } from "models/types";
import { LeaderBoardActions } from "./types";

export const leaderboardReducer = (state: User[], {action, payload}: LeaderBoardActions) => {
    switch (action) {
        case 'addData':
            return produce(payload.data, draft => draft);
    }
    return state;
}