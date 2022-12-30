import { Link } from 'react-router-dom'
import styled from 'styled-components'

const borderColor = 'rgba(255, 255, 255, 0.6)'

export const Wrapper = styled.div`
    position: fixed;
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
`

export const Title = styled.h2`
    margin-bottom: 1em;
    font-weight: bold;
    padding: 0 3.5em;
`

export const BottomRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
    flex-shink: 0;
    flex-grow: 0;
    justify-content: space-between;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        height: 0.1em;
        right: 15.4em;
        background-color: ${borderColor};
    }
`

export const LnkLeaderboard = styled(Link)`
    padding: 0.75em 0;
    font-size: 1.1em;
    border-radius: 2em;
    height: 3.6em;
    display: flex;
    width: 14em;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: relative;
    svg {
        position: absolute;
        height: 100%;
        width: 100%;
        fill: ${borderColor};
        rect {
            opacity: 0.2;
        }
    }
`

export const Members = styled.ul`

`

export const LeftHookDeco = styled.div`
    fill: ${borderColor};
    position: absolute;
    top: 0;
    bottom: 0;
    left: -7em;
    width: 7em;
    height: 100%;
`