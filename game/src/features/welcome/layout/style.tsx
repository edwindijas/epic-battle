import { uniPos } from "library/main";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    background-color: #fff;
    top: 4em;
    padding: 0.4em 2em 0.4em 0.4em;
    border-radius: 3em 0 0 3em;
    display: flex;
    flex-direction: row;
    transition: right 1s;
    z-index: 10;
    ${({theme}) => `
        color: ${theme?.colors?.background};
    `}

    ${({active}: {active: boolean}) => `
        right: ${active ?  0: -40 }em;
    `}
    
`

export const UserProfilePicture = styled.figure`
    height: 4em;
    width: 4em;
    background-color: #000;
    border-radius: 50%;
    ${({theme}) => `
        background-color: ${theme?.colors?.text}
    `}
`

export const Avatar = styled.img`
     width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    border: 0;
`

export const UserGreet = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1.5em 0 0.75em;
    max-width: 10em;
    position: relative;
    span{
        display: block;
        text-transform: capitalize;
        &:last-child {
            font-size: 1.5em;
            font-weight: 800;
            margin-top: 0.15em;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    &::after {
        content: '';
        position: absolute;
        background-color: #000;
        width: 0.2em;
        ${uniPos(0.5, ['left', 'right'])};
        right: 0;
        border-radius: 1em;

    }

    ${({theme}) => `
        span:first-child {
            color: ${theme?.colors?.backgroundLight};
        }
        &::after {
            background-color: ${theme?.colors?.text};
        }
    `}
`

export const UserRating = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 1em;
    font-size: 1.25em;
    font-weight: 800;
`