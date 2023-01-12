import { GameData } from "models/Stat";
import { useEffect, useState } from "react";
import { GameStatLayout } from "./layout/GameStatLayout";
import { GameStatProps } from "./types";


export const GameStat = (props : GameStatProps) => {

    const {listener, removeListener} = props;

    const [stat, setState] = useState<GameData>({
        score: 0,
        life: 0,
        lifeMax: 0,
        armo: 0,
        armoMax: 0,
        multiplier: 1
    })


    useEffect(() => {
        const id = listener(setState);
        return () => {
            removeListener(id)
        }
    }, [setState])

    

    return <GameStatLayout 
        stat={stat}
        {...props}
    />
}