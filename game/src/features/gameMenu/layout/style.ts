import { uniPos } from "library/main";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    ${uniPos(0)};
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.div`
    width: 90%;
    height: 90%;
    background-color: #fff;
    border-radius: 1em;
    max-width: 45em;
    max-height: 22.5em;
    color: #000;
    padding: 2em 0;
    position: relative;
`

export const Title = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 3em;
    color: #6A9C59;
`

export const BtnClose = styled.button`
    background: none;
    border: 0.1em solid #6A9C59;
    fill: #6A9C59;
    position: absolute;
    top: 2em;
    right: 2em;
    width: 3em;
    height: 3em;
    padding: 0.75em;
    border-radius: 50%;
`

export const Quote = styled.div`
    margin: 1.5em 0em;
    min-height: 9em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #f2fdee;
    padding: 0.5em 2em;
`

export const QuoteParagraph = styled.p`
    font-size: 1.3em;
    line-height: 1.5;
    color: #778373;
    white-space: pre-wrap;
`

export const QuoteAuthor = styled.p`
    font-size: 5em;
`

export const Buttons = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const BtnResume = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 1.5em);
    font-size: 1.2em;
    text-transform: uppercase;
    margin: 0 0.75em;
    height: 3em;
    background: none;
    color: #fff;
    position: relative;
    font-weight: 600;

    &::before, &::after {
        position: absolute;
        content: '';
        border-radius: 0.25em;
    }

    &::after {
        ${uniPos(0)};
        background-color: #6A9C59;
    }

    &::before {
        width: 100%;
        height: 100%;
        border: 0.1em solid #6A9C59;
        left: 0.1em;
        top: 0.1em;
        opacity: 0.3;
    }


    span {
        position: relative;
        z-index: 8;
    }

`

export const BtnRestart = styled(BtnResume)`
    width: 25%;
    margin: 0;
    color: #DE7A7A;

    ${({$gameOver}: {$gameOver: boolean}) => $gameOver ? `
        width: calc(50% - 0.5em);
    `: ''}

    &::after {
        background-color: #fff;
        border: 0.1em solid #DE7A7A;
    }

    &::before {
        border-color: #DE7A7A;
    }
`

export const BtnExit = styled(BtnRestart)`
    color: #E69B10;
    ${({$gameOver}: {$gameOver: boolean}) => $gameOver ? `
        margin-right: 1em;
    `: ''}

    &::after {
        border-color: #E69B10;
    }

    &::before {
        border-color: #E69B10;
    }
`