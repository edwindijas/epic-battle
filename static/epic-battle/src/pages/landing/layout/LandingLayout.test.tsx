import { screen } from "@testing-library/react"
import { LandingLayout } from './LandingLayout'


const { getByTestId } = screen,
    LandingTestId = 'page-landing-layout';


beforeEach(() => {
    testRender(<LandingLayout />)
})

describe('Layout renders', () => {
    it ('correctly', () => {
        expect(getByTestId(LandingTestId)).toBeInTheDocument()
    })

    it ('has start game button', () => {
        expect(getByTestId(LandingTestId + '-lnk-game')).toBeInTheDocument()
    })

    it ('has correct game title', () => {
        expect(getByTestId(LandingTestId + '-title')).toBeInTheDocument()
    })

    it ('has correct game ico', () => {
        expect(getByTestId(LandingTestId + '-ico-epic')).toBeInTheDocument()
    })
})