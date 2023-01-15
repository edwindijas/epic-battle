import { uniPos } from "library/main";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    justify-content: center;
    z-index: 10;
    ${({length}: {length: number}) => `
        width: ${length}px;
        height: ${length}px;
    `}
`


export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 800;
`

export const AboutBoost = styled.div`
    display: flex;
    padding: 1em 0;
    align-items: center;
    width: 100%;
    justify-content: center;
    max-width: 22em;
    position: relative;
    color: #5a784a;
`

export const AboutBoostPar = styled.p`
    margin: 0 1.5em 0 0.5em;
    font-size: 1.4em;
`

export const AboutBoostFig = styled.span`
    display: inline-block;
    margin-left: 0em;
    font-weight: 900;
`

export const BoostIcon = styled.figure`
    width: 2em;
    height: 2em;
    padding: 0.5em;
    fill: #5a784a;
`

export const HelpIcon = styled.button`
    border: 1px solid #1b6933;
    border-radius: 50%;
    background-color: #4b4bd1;
    display: flex;
    padding: 0;
    font-size: 1.3em;
    width: 1.5em;
    height: 1.5em;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    position: absolute;
    right: 1em;
    top: 0;
    bottom: 0;
    margin: auto 0;
`

export const IcoEpic = styled.figure`
    fill: #fff;
    height: 8em;
    margin:0 auto 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes animate {
        0% {
            height: 8em;
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
            height: 7em;
        }

        100% {
            height: 8em;
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
        animation: animate 5s infinite, bubble-anim 1s infinite;
    }

`

export const LnkStartGame = styled(Link)`
    display: flex;
    width: 90%;
    height: 3em;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: 800;
    font-size: 1.5em;
    margin-top: 1.5em;
    margin: 1em auto 0;
    letter-spacing: 0.1em;
    position: relative;
    font-family: arial;
    color: #5A784A;
    text-transform: uppercase;

    max-width: 15em;
    
    span {
        position: relative;
        z-index: 2;
    }

    &::before, &::after { 
        position: absolute;
        content: '';
        border-radius: 0.5em;
        background-color: #fff;
    }


    &::after {
        ${uniPos(0)}
    }

`
