import { screen } from "@testing-library/react"
import { FeatureBackgroundLayout } from "./Background";

const { getByTestId } = screen,
    TestId = 'feature-background';

beforeEach(() => {
    testRender(<FeatureBackgroundLayout />)
})

describe('background render', () => {
    it ('correctly', () => {
        expect(getByTestId(TestId)).toBeInTheDocument();
    })

    it ('img', () => {
        expect(getByTestId(TestId + '-background-image')).toBeInTheDocument();
    })
})