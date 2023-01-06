import { fireEvent, screen } from "@testing-library/react";
import { FeatureSettings } from "./SettingsFeature";

const { getByTestId, queryByTestId } = screen,
    TestIdButton = 'feature-settings-component-setting-toggle',
    TestIdPanel = 'feature-settings-layout';

beforeEach(() => {
    testRender(<FeatureSettings />)
})

describe('Settings Feature has', () => {
    it ('enable button', () => {
        expect(getByTestId(TestIdButton))
    })

    it ('settings panel disabled by default', () => {
        const panel = queryByTestId(TestIdPanel);
        expect(panel).toBe(null)
    })

    it ('panel show when switch is clicked', () => {
        const button = getByTestId(TestIdButton);
        fireEvent.click(button);
        expect(getByTestId(TestIdPanel)).toBeInTheDocument()
    })

    it ('panel hides when close is clicked', () => {
        const btnOpen = getByTestId(TestIdButton);
        fireEvent.click(btnOpen);
        
        expect(getByTestId(TestIdPanel)).toBeInTheDocument();

        const btnClose = getByTestId(TestIdPanel + '-btn-close');
        fireEvent.click(btnClose);

        const panel = queryByTestId(TestIdPanel);
        expect(panel).toBe(null)


    }) 
})