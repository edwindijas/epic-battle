import { uniPos } from "library/main";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    max-width: 90%;
`


export const Title = styled.h1`

`

export const TitleSpan = styled.span`
    font-size: 3em;
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.3);
    &:last-child {
        font-weight: 800;
        font-size: 5.5em;
        margin-top: 0.075em;
    }
`

export const IcoEpic = styled.figure`
    fill: #fff;
    height: 8em;
    width: 10em;
    margin: 0 1em 0 auto;
    svg {
        width: 7em
    }

`

export const LnkStartGame = styled(Link)`
    display: flex;
    width: 100%;
    background-color: #000;
    height: 3em;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.6em;
    border-radius: 4em;
    margin-top: 1.5em;
    letter-spacing: 0.1em;
    position: relative;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);

    span:nth-child(2) {
        position: relative;
        z-index: 2;
    }

    &::before, &::after { 
        position: absolute;
        content: '';
        border-radius: 4em;
    }

    &::before {
        ${uniPos(-0.2)}
        opacity: 0.2;
    }

    &::after {
        ${uniPos(0)}
    }

    ${({theme}) => `
        &::after, &::before {
            background: ${theme?.gradient?.general};
        }
    `}
`

export const ThreeDots = styled.span`
    ${uniPos(0, ['left', 'right'])}
    left: 0.5em;
    margin: auto 0;
    z-index: 3;

    &, &::after, &::before {
        position: absolute;
        width: 0.35em;
        height: 0.35em;
        border-radius: 50%;
        border: 0.1em solid rgba(255, 255, 255, 0.1);
        display: block;
        box-sizing: border-box;
        background-clip: padding-box;
        background-color: rgba(49, 59, 77, .41);
    }

    &::after, &::before {
        content: '';
        left: 0.25em;
    }

    &::before {
        bottom: auto;
        top: -0.9em;
    }

    &::after {
        top: auto;
        bottom: -0.9em;
    }

    &:last-child {
        left: auto;
        right: 0.5em;
        transform: rotate(180deg);
    }
`