import { screen } from "@testing-library/react"
import { PageLanding } from "./PageLanding"

const LandingTestId = 'page-landing',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<PageLanding />)
})


describe ('Landing Page', () => {
    it ('should render correctly', () => {
        expect(getByTestId(LandingTestId)).toBeInTheDocument()
    })
})