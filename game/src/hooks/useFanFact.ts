import { useCallback, useEffect, useState } from "react"



export const useFunFact = (): string => {
    const getRandomFunFact = useCallback((): string => {
        const fact = Math.floor(Math.random() * funFacts.length);
        return window.funFacts[fact];
    }, [])

    const [fact, setFact] = useState(getRandomFunFact());
    useEffect(() => {
        const interval = window.setInterval(() => {
            setFact(getRandomFunFact())
        }, 6000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return fact;
}