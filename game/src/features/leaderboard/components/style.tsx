import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.75em 1em;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserRating = styled.p`
    font-size: 1.4em;
    padding: 0;
`

export const UserProfilePicture = styled.figure`
    height: 3em;
    width: 3em;
    border-radius: 50%;
    border: 1px solid #000;
    ${({theme}) => `
        border-color: ${theme?.colors?.text};
    `}
    margin-left: 1em;
`


export const Username = styled.p`
    padding: 0 1em;
    font-size: 1.2em;
    font-weight: bold;
`

export const Points = styled.p`
    font-size: 1.4em;
    font-weight: 800;
`