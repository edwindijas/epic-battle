import { fireEvent, screen, render } from "@testing-library/react"
import { useState, FocusEvent, useRef } from "react"
import { act } from "react-dom/test-utils"
import { Link } from "react-router-dom"
import { Router } from "./Router"

const { getByTestId } = screen;

beforeEach(() => {
    testRenderWithoutRouter(<div ><Router >
    </Router></div>)
})

describe('Router', () => {
    it ('Renders main page to be page home', () => {
        expect(getByTestId('page-landing')).toBeInTheDocument()
    })

    it ('Navigates to Game Page correclty', () => {
        const nextPageLink = getByTestId('page-landing-layout-lnk-game');

        act(() => {
            fireEvent.click(nextPageLink);
        })

        expect(getByTestId('page-game')).toBeInTheDocument()
    })
})