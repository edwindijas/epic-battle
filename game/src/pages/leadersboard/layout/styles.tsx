import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 90%;
    max-width: 800px;
    max-height: 800px;
    border-radius: 1em;
    overflow: hidden;
`

export const List = styled.ul`
    color: #000;
`

export const ListItem = styled.ul`
    color: #000;
`

export const BtnContainer = styled.div`
    padding: 2em 0 1em;
    justify-content: center;
    display: flex;
    width: 100%;
    position: relative;
    z-index: 3000;
`

export const BackButton = styled.div`
    width: 3em;
    height: 3em;
    border: 0.1em solid #fff;
    border-radius: 50%;
    margin-right: 3em;
    fill: #fff;
    padding: 0.6em;
    position: relative;
    z-index: 3000;
`

export const Title = styled.h1`
     text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 3em;
    color: #fff;
`

export const TitleWrapper = styled.div`
    padding: 3em 2em 4em;
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
`

export const NextButton = styled.button`
    text-transform: capitalize;
    font-size: 1.4em;
    width: 10em;
    height: 2.5em;
    border-radius: 0.5em;
    margin-right: 1em;
    background-color: #fff;
    font-weight: bold;
    color: #174c23;
   
`

export const Prevbutton = styled(NextButton)`
    border: 0.1em solid #000;
    background: none;
    ${({theme}) => `
        color: ${theme?.color?.text};
        border-color: ${theme?.colors?.text};
    `}
`

export const BackgroundWrapper = styled.div`
    fill: #fff;
    position: absolute;
    left: 0;
    bottom: -0.3em;
    width: 100%;
    svg {
        width: 100%;
    }
`