import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    max-width: 50em;
    border-radius: 1em;
    overflow: hidden;
`

export const Body = styled.main`
    height: 22em;
    color: #000;
`

export const BtnContainer = styled.div`
    padding: 2em 0 1em;
    justify-content: center;
    display: flex;
    width: 100%;
`

export const BackButton = styled.div`
    width: 3em;
    height: 3em;
    border: 0.1em solid #fff;
    border-radius: 50%;
    margin-right: 3em;
    fill: #fff;
    padding: 0.6em;
`

export const Title = styled.h1`
    color: #000;
    font-size: 2.5em;
    text-transform: capitalize;
    color: #fff;
`

export const TitleWrapper = styled.div`
    padding: 3em 2em 4em;
    ${({theme}) => `
        background: ${theme?.gradient?.general};
    `}
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
`

export const NextButton = styled.button`
    ${({theme}) => `
        background-image: ${theme?.gradient?.general};
        color: ${theme?.colors?.text};
    `}
    text-transform: capitalize;
    font-size: 1.4em;
    width: 10em;
    height: 2.5em;
    border-radius: 10em;
    margin-right: 1em;
   
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