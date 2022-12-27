import { screen } from "@testing-library/react"
import { render } from "../../setupTests";
import { PageLanding } from "./PageLanding"

const LandingTestId = 'page-landing',
    { getByTestId } = screen;

beforeEach(() => {
    render(<PageLanding />)
})


describe ('Landing Page', () => {
    it ('should render correctly', () => {
        expect(getByTestId(LandingTestId)).toBeInTheDocument()
    })

    it ('Should contain the link page to game page', () => {
        expect(getByTestId(LandingTestId + '-lnk-game')).toBeInTheDocument()
    })
})