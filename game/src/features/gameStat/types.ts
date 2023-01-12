import { AddStatListener, RemoveStatListener } from "models/Stat";

export interface GameStatProps {
    listener: AddStatListener, 
    removeListener: RemoveStatListener,
    gamePause: () => void,
    gameResume: () => void,
    paused: boolean,
    gameRestart: () => void
}