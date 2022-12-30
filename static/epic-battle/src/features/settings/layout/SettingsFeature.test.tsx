import { screen } from '@testing-library/react';
import {SettingsFeatureLayout} from './SettingsFeatureLayout'

const TestId = 'feature-settings-layout',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<SettingsFeatureLayout />)
})

describe('Settings Feature should', () => {
    it ('render', () => {
        expect(getByTestId(TestId)).toBeInTheDocument()
    })

    it ('wrapper', () => {
        expect(getByTestId(TestId + '-wrapper')).toBeInTheDocument()
    })

    it ('close button', () => {
        expect(getByTestId(TestId + '-btn-close')).toBeInTheDocument()
    })

    it('title', () => {
        expect(getByTestId(TestId + '-title')).toBeInTheDocument()
    })
})