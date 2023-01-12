import { AddStatListener, GameStat as Stat, RemoveStatListener } from "models/Stat";
import { removeListener } from "process";
import { useCallback, useEffect, useState } from "react";
import { GameStatLayout } from "./layout/GameStatLayout";


export const GameStat = ({listener, removeListener} : {listener: AddStatListener, removeListener: RemoveStatListener}) => {

    const [stat, setState] = useState<Stat>({
        score: 0,
        life: 0,
        maxLife: 0
    })


    useEffect(() => {
        const id = listener(setState);
        return () => {
            removeListener(id)
        }
    }, [setState])

    

    return <GameStatLayout {...stat} />
}