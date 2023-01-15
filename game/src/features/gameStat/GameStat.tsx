import { GameData } from "models/Stat";
import { useEffect, useState } from "react";
import { GameStatLayout } from "./layout/GameStatLayout";
import { GameStatProps } from "./types";
import { Application } from "game/main/application";


export const GameStat = (props : GameStatProps) => {
    const [stat, setState] = useState<GameData>({
        score: 0,
        life: 0,
        lifeMax: 0,
        armo: 0,
        armoMax: 0,
        boost: 15
    })


    useEffect(() => {
        const app = window.app as Application
        const id = app.addGameEventListener({event: 'datachanged', callback: setState});
        return () => {
            app.removeGameEventListener(id)
        }
    }, [setState])

    return <GameStatLayout 
        stat={stat}
        {...props}
    />
}