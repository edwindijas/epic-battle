import { Link } from 'react-router-dom'
import styled from 'styled-components'

const borderColor = 'rgba(255, 255, 255, 0.6)'

export const Wrapper = styled.div`
    bottom: 0;
    max-width: 40em;
    border-bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 0.9em;
    margin-top: 3em;
    position: relative;
`

export const Title = styled.h2`
    margin-bottom: 1em;
    font-weight: bold;
    padding: 0 3.5em;
`

export const LnkLeaderboard = styled(Link)`
    padding: 0.75em 0;
    font-size: 1.1em;
    border-radius: 2em;
    height: 4em;
    display: flex;
    width: 14em;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: relative;
    background-color: #5A784A;
    margin:0 auto;
    width: 80%;
    max-width: 18em;
    border: 1px solid #7da261;
`

export const Members = styled.ul`

`

export const Member = styled.li`
    position: relative;
    padding: 0.5em;
    &::after {
        position: absolute;
        left: 0;
        right: 0;
        height: 0.1em;
        background-color: #B0D396;
        bottom: -0.05em;
        content: '';
    }

    &:last-child {
        &::after {
            height: 0;
        }
    }
`
