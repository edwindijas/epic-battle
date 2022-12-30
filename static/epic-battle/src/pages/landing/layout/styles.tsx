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
    text-transform: Capitalize;
    letter-spacing: 0.1em;
    &:last-child {
        font-weight: 400;
        font-size: 8em;
        margin-top: 0.1em;
    }
`

export const IcoEpic = styled.figure`
    fill: #fff;
    height: 3em;
    width: 10em;
    margin: 0 8em 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes animate {
        0% {
            height: 15em;
        }

        ${() => {
            let str = '';
            for (let x = 1; x < 11; x++) {
                str += `${x}% {
                    opacity: ${x % 3 === 0 ? 0 : 1};
                }`;
            }
            return str;
        }}

        50% {
            height: 12em;
        }

        100% {
            height: 15em;
        }
    }
      
    @keyframes bubble-anim {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1); }
    
    20% {
        -webkit-transform: scaleY(0.95) scaleX(1.05);
        transform: scaleY(0.95) scaleX(1.05); }
    
    48% {
        -webkit-transform: scaleY(1.1) scaleX(0.9);
        transform: scaleY(1.1) scaleX(0.9); }
    
    68% {
        -webkit-transform: scaleY(0.98) scaleX(1.02);
        transform: scaleY(0.98) scaleX(1.02); }
    
    80% {
        -webkit-transform: scaleY(1.02) scaleX(0.98);
        transform: scaleY(1.02) scaleX(0.98); }
    
    97%, 100% {
        -webkit-transform: scale(1);
        transform: scale(1); } }

    svg {
        height: 10em;
        animation: animate 5s infinite, bubble-anim 1s infinite;
    }

`

export const LnkStartGame = styled(Link)`
    display: flex;
    width: 90%;
    background-color: #000;
    height: 3em;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: 800;
    font-size: 1.5em;
    border-radius: 4em;
    margin-top: 1.5em;
    margin: 1em auto 0;
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
        width: 0.3em;
        height: 0.3em;
        border-radius: 50%;
        //border: 0.1em solid rgba(255, 255, 255, 0.1);
        display: block;
        box-sizing: border-box;
        background-clip: padding-box;
        background-color: rgba(49, 59, 77, .71);
    }

    &::after, &::before {
        content: '';
        left: 0.25em;
    }

    &::before {
        bottom: auto;
        top: -0.7em;
    }

    &::after {
        top: auto;
        bottom: -0.7em;
    }

    &:last-child {
        left: auto;
        right: 0.5em;
        transform: rotate(180deg);
    }
`