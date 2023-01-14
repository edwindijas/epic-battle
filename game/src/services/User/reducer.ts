import {produce} from "immer";
import { User } from "models/types";
import { UserActions } from "./types";

export const userReducer = (state: User, {action, payload}: UserActions) => {
    switch (action) {
        case 'addData':
            return produce(payload.data, draft => draft);
    }
    return state;
}