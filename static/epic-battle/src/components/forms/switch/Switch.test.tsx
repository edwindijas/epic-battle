import { fireEvent, screen } from "@testing-library/react";
import { Switch } from "./Switch";

const testid = 'component-switch',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<Switch messageId="app.feature.settings.music" />)
})

describe('Switch', () => {
    it ('renders correctly', () => {
        expect(getByTestId(testid)).toBeInTheDocument()
    })

    it ('renders label', () => {
        expect(getByTestId(testid + '-label')).toBeInTheDocument()
    })

    it ('renders switch', () => {
        expect(getByTestId(testid + '-switch')).toBeInTheDocument()
    })

    it ('renders switch circle', () => {
        expect(getByTestId(testid + '-switch')).toBeInTheDocument()
    })

    it ('trigger on Click with correct value', () => {
        let state = false;

        const handler = (value: boolean) => {
            state = value;
        }

        const { getAllByTestId } = testRender(<Switch messageId="app.feature.settings.music" onClick={handler} />);
        const btnSwitch = getAllByTestId(testid + '-switch')[1];
        fireEvent.click(btnSwitch);
        expect(state).toEqual(true);
        fireEvent.click(btnSwitch);
        expect(state).toEqual(false);

    })
})