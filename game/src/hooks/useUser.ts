import { User } from "models/types";
import { useContext } from "react"
import { UserContext } from "services/User/User"

export const useUser = (): User => {
    const {user} = useContext(UserContext);
    return user;
}