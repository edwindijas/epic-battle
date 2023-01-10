import { uniPos } from 'library/main';
import styled from 'styled-components';


const Background = styled.div`
    &::before, &::after {
        content: '';
        position: absolute;
        border-radius: 1em;
    }

    &::after {
        ${uniPos(0)}
        border-radius: 0.75em;
        box-shadow: 0 0 0.4em #fff, inset 0 0 1em -0.2em rgba(0, 0, 0, 0.5);
    }

    &::before {
        ${uniPos(-0.4)}
        box-shadow: inset 0 0 0.4em #fff;
    }

    ${ ({theme}) => `
        &::before {
            background-image: repeating-linear-gradient(60deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) 0.3em, transparent 0.3em, transparent 1.3em), ${theme?.gradient?.general};
        }

        &::after {
            background-color: ${theme?.colors?.background}
        }
        
        color: ${theme?.colors?.text};
    `}
`

export const Container = styled.div`
    position: fixed;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    ${uniPos(0)}
`

export const Wrapper = styled(Background)`
    width: 30em;
    height: 20em;
    position: relative;
    border-radius: 2em;
    display: flex;
    padding-top: 2em;
    flex-direction: column;
    justify-content: center;
   
`


export const CloseButton = styled.button`
    position: absolute;
    width: 3em;
    height: 3em;
    ${ ({theme}) => `
        fill: ${theme?.colors?.text};
        box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.2);
        background-color: red;
    `}        
    top: -1.5em;
    right: -1.5em;
    border-radius: 50%;
    z-index: 5;
    //overflow: hidden;
    padding: 0.85em;
    overflow: hidden;
    transition: all .4s;

    &:hover {
        padding: 0;
        fill: #fff;
    }

    &::before {
        content: "";
        position: absolute;
        top: 1%;
        left: 5%;
        width: 90%;
        height: 90%;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 0px,#ffffff,rgba(255,255,255,0) 58%);
        --webkit-filter: blur(5px);
        z-index: 2;
    }
    &::after {
        content: "";
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: radial-gradient(circle at 50% 30%,rgba(245,237,48,0),rgba(200,190,20,0.2) 50%,#8f0d09 100%);
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
        -webkit-transform: rotateX(90deg) translateZ(-160px);
        transform: rotateX(90deg) translateZ(-160px);
        z-index: 1; 
    }
`

export const Title = styled.div`
    position: absolute;
    height: 4em;
    width: 12em;
    z-index: 8;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: repeating-linear-gradient(60deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1) 0.3em,transparent 0.3em,transparent 1.3em),linear-gradient(60deg,#2006c8,#020d56);
    ${({theme}) => `
        color: ${theme?.colors?.text};
    `}
    box-shadow:inset 0 0 0.3em rgba(255, 255, 255, 0.5);

    border-radius: 0.5em;

    &::after {
        content: '';
        position: absolute;
        ${uniPos(0.3)}
        border: 0.1em solid rgba(255, 255, 255, 0.25);
        border-radius: 0.25em;
        box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    }

    h2 {
        position: relative;
        z-index: 8;
        font-size: 1.8em;
        text-transform: capitalize;
        text-shadow: 0 0 0.1em rgba(0, 0, 0, 0.4);
    }
    
`

export const SettingsContainer = styled.div`
    color: #fff;
    padding: 0 2em;
    position: relative;
    z-index: 9;
    font-size: 1.6em;
    width: 100%;
`

export const BtnCloseOrOther = styled(Background)`
    z-index: 9;
    position: relative;
    padding: 1em;
    max-width: 10em;
    color: #fff;
    background: none;
    margin: 2em auto 0;
    width: 100%;
    justify-content: center;
    display: flex;
    span {
        position: relative;
        z-index: 12;
        font-size: 1.3em;
    }
    &::before {
        ${uniPos(-0.2)}
    }

    &::after {
        box-shadow: none;
    }
`