import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0.8em 6em;
    align-items: center;
    color: #174c23;
    justify-items: space-between;

    &:last-child{
        border: 0;
    }
`

export const Profile = styled.div`
    width: 4em;
    height: 4em;
    background-color: #fff;
    margin: 0 2em 0 1em;
    border-radius: 50%;
`

export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
`

export const Score = styled.div`
    font-size: 1.5em;
    width: 6em;
    text-align: right;
    font-family: 'MartianMono', 'Courier New', Courier, monospace;
    font-weight: 600;
    letter-spacing: 0.03em;
`

export const Rating = styled.div`
    font-size: 1.5em;
    width: 5em;
    text-align: right;
    font-family: 'MartianMono', 'Courier New', Courier, monospace;
    font-weight: 900;
    letter-spacing: 0.03em;
    white-space: nowrap
`

export const Name = styled.div`
    font-size: 1.5em;
    width: calc(100% - 16em);
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    & > span {
        font-size: 0.85em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: block;
        padding: 0.5em 0;
        color: #d5ecbf;
    }

    
`

export const NickName = styled.div`
    color: #fff;
`