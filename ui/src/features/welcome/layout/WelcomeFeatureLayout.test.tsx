import { screen } from '@testing-library/react'
import { WelcomeFeatureLayout } from './WelcomeFeatureLayout'

beforeEach(() => {
    testRender(<WelcomeFeatureLayout />)
})

const WelcomeFeatureTestId = 'feature-welcome-layout'

const { getByTestId } = screen;

describe('Welcome feature render', () => {
    it ('correctly', () => {
        expect(getByTestId(WelcomeFeatureTestId)).toBeInTheDocument();
    })

    it ('greeting', () => {
        expect(getByTestId(WelcomeFeatureTestId + '-greeting')).toBeInTheDocument()
    })

    it ('user icon', () => {
        expect(getByTestId(WelcomeFeatureTestId + '-user-profile')).toBeInTheDocument()
    })

    it ('rating', () => {
        expect(getByTestId(WelcomeFeatureTestId + '-user-rating')).toBeInTheDocument()
    })

    it ('name', () => {
        expect(getByTestId(WelcomeFeatureTestId + '-user-name')).toBeInTheDocument()
    })

    
})