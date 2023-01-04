import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0.8em 3em;
    align-items: center;
    border-bottom: 1px solid #eee;
    &:last-child{
        border: 0;
    }
    ${({theme}) => `
        color: ${theme?.colors?.backgroundLight}
    `}
`

export const Profile = styled.div`
    width: 4em;
    height: 4em;
    background-color: #ccc;
    margin: 0 2em;
    border-radius: 50%;
`

export const Score = styled.div`
    font-size: 2em;
    width: 10em;
    text-align: right;
`

export const Rating = styled.div`
    font-size: 2em;
    width: 1.5em;
`

export const Name = styled.div`
    font-size: 2em;
    width: calc(100% - 16em);
    & > span {
        font-size: 0.5em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: block;
        padding: 0.5em;
    }
`

export const NickName = styled.div``