import { screen } from "@testing-library/react"
import { FeatureBackground } from "./Background"

const { getByTestId } = screen,
    TestId = 'feature-background';


beforeEach(() => {
    testRender(<FeatureBackground />)
})

describe('background render', () => {
    it ('correctly', () => {
        expect(getByTestId(TestId)).toBeInTheDocument();
    })
})