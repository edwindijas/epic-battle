import { useCallback, useEffect, useState } from "react"
export const Margin = 20;


export const useSquare = () => {
    const [ length, setLength ] = useState(800);

    const calculateLength = useCallback(() => {
        const {innerWidth, innerHeight} = window;
        let length = innerWidth < innerHeight ? innerWidth : innerHeight;
        length = length > 820 ? 820 : length;
        length -= Margin;
        setLength(length);

    }, [setLength]);

    useEffect(() => {
        const lengthCalculator = calculateLength;
        window.addEventListener('resize', lengthCalculator)
        calculateLength();
        return () => {
            window.removeEventListener('resize', lengthCalculator)
        }

    }, [calculateLength])
    return length;
}