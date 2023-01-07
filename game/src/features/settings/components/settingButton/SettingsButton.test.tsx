import { screen } from "@testing-library/react";

import { SettingsToggle } from "./SettingsButton";

const TestId = 'feature-settings-component-setting-toggle',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<SettingsToggle />)
})

describe('Toggle settings should', () => {
    it ('render', () => {
        expect(getByTestId(TestId)).toBeInTheDocument()
    })
})