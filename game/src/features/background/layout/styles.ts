import { uniPos } from "library/main";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
`

export const BackgroundImage = styled.img`
    background-color: yellow;
    opacity: .3;
`

export const Board = styled.div`
    position: absolute;
    ${uniPos(0)};

    margin: auto;
    background-image: radial-gradient(#C2D448, transparent 100%);
    background-image: radial-gradient(#C2D448,transparent 68%);
    border-radius: 50%;

    ${({width}: {width: number}) => `
        height: ${width}px;
        width: ${width}px;
    `}
`