import styled from "styled-components";
import { StyEleWrapper } from "./types";

export const Wrapper = styled.div`
    width: 15em;
    position: fixed;
    z-index: 2000;
    border-radius: 1em;
    padding: 1em 0 0;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    width: 90%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
`



export const BtnPause = styled.figure`
    width: 4em;
    height: 4em;
    background-color: #464A55;
    border-radius: 50%;
    fill: #F3EEF5;
    padding: 1.4em;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        opacity: 1;
        background: #fff;
        fill: #72B12C;
        padding: 1.2em;
    }
`

export const UserInfo = styled.div`
    width: 15em;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 4em;
`
export const UserProfile = styled.div`
    height: 4em;
    width: 4em;
    background-color: #fff;
    border-radius: 50%;
`

export const UserProfileImg = styled.img`
    width: 100%;
    height: 100%;
`


export const GameStatus = styled.div`
    width: 15em;
`

export const UserProps = styled.div`
    width: 11em;
    padding-left: 0.5em;
    height: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const UserLife = styled.div`
    height: 1.25em;
    background-color: rgba(39, 56, 34, 0.3);;
    width: calc(100% - 2em);
    margin: 0 0 0 auto;
    border-radius: 1em;
    position: relative;
    fill: #dd3838;
    text-align: right;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        z-index: 1;
        top: 0;
        background-color: #dd3838;
        height: 100%;
        border-radius: 1em;

        ${({per}: {per: number}) => `
            width: ${per}%;
        `}
    }

    svg {
        position: absolute;
        left: -1.7em;
        width: 1.25em;
        height: 1.25em;
        top: 0em;
    }

    span {
        position: relative;
        z-index: 10;
        height: 100%;
        display: flex;
        padding-right: 0.7em;
        font-size: 0.8em;
        font-weight: 800;
        align-items: center;
        justify-content: right;
        opacity: .8;
    }
`

export const UserArmo = styled(UserLife)`
    margin-top: .5em;
    &::before{
        
        ${({color, per}: {color: string, per: number}) => `
            width: ${per}%;
            background-color: ${color};
        `}
    }
`

export const GameScore = styled.p`
    font-size: 2.5em;
    text-align: right;
    font-family: 'MartianMono', 'Courier New', Courier, monospace;
    font-weight: 900;
    letter-spacing: 0.03em;
    width: 5.4em;
    padding: 0.25em;
    background-color: rgba(39, 56, 34, 0.2);
    border-radius: 0.25em;
    text-shadow: 0 0 0.2em #273822;
    margin: 0 0 0 auto;
    color: #d7f6de;
`;

export const GameScoreDig = styled.span`
    &::after{
        content: ',';
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        color: yellow;
        font-size: 0.7em;
    }
    &:last-child::after {
        content: ''
    }
`;


export const GameMultiplier = styled.p`
    font-family: 'MartianMono', 'Courier New', Courier, monospace;
    font-weight: 900;
    letter-spacing: 0.03em;
    font-size: 2em;
    width: max-content;
    height: 1.75em;
    margin: 0em 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0 0.2em #273822;
    position: relative;
    padding: 0.3em;
    color: yellow;

    &::before {
        content: '*';
        position: relative;
        top: -0.5em;
        font-size: 0.8em;
    }
`