import styled from "styled-components";
import { EleWrapperProps } from "./types";

export const Wrapper = styled.div`
    width: 15em;
    position: fixed;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 1em;
    ${({top, left}: EleWrapperProps) => `
        top: ${top}px;
        right: ${left}px;
    `}
    padding: 1em;

`

export const Group = styled.div`
    padding: 0.5em 0;
`

export const Bar = styled.div`
    height: 1em;
    width: 80%;
    background-color: red;
    border-radius: 1em;
`

export const Multiply = styled.div`
    background-color: red;
    width: 3em;
    height: 3em;
`

export const Score = styled.p`
    font-size: 1.8em;
    font-weight: 800;
    font-family: 'MartianMono', monospace, 'Courier New', Courier;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
`