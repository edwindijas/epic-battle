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
        multiplier: 1
    })


    useEffect(() => {
        const app = window.app as Application
        const id =app.addStatListener(setState);
        return () => {
            app.removeStatListener(id)
        }
    }, [setState])

    

    return <GameStatLayout 
        stat={stat}
        {...props}
    />
}