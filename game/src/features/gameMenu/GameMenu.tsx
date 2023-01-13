import { Application } from "game/main/application";
import { useFunFact } from "hooks/useFanFact";
import { useCallback, useEffect, useState } from "react";
import { GameMenuLayout } from "./layout/GameMenuLayout"

export const GameMenu = () => {
    const funFact = useFunFact();
    

    const [pause, setPause] = useState(false);
    const [gameOver, setOver] = useState(false);

    const pauseGame = useCallback(() => {
        setPause(true);
    }, [setPause])

    const resumeGame = useCallback(() => {
        setPause(false);
    }, [setPause])

    const restartGame = useCallback(() => {
        setOver(false);
        setPause(false);
    }, [setPause, setOver])


    const overGame = useCallback(() => {
        setOver(true);
    }, [setOver])

    useEffect(() => {
        const app = window.app as Application;
        const pauseListenerId = app.addGameEventListener({
            event: 'pause',
            callback: pauseGame
        })

        const resumeListenerId = app.addGameEventListener({
            event: 'resume',
            callback: resumeGame
        })

        const restartListenerId = app.addGameEventListener({
            event: 'restart',
            callback: restartGame
        })

        const gameOverListenerId = app.addGameEventListener({
            event: 'over',
            callback: overGame
        })

        return () => {
            app.removeGameEventListener(pauseListenerId);
            app.removeGameEventListener(resumeListenerId);
            app.removeGameEventListener(gameOverListenerId);
            app.removeGameEventListener(restartListenerId);
        }

    }, [pauseGame, resumeGame, restartGame, overGame])

    if (!pause && !gameOver) {
        return null;
    }

    const layoutProps = {
        funFact,
        gameOver
    };

    return <GameMenuLayout {...layoutProps} />
}