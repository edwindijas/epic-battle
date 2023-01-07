import { screen } from "@testing-library/react";
import {LeaderBoardFeatureUser} from './User'

const TestId = 'feature-leaderboard-component-user',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<LeaderBoardFeatureUser />)
})

describe('Leaderboard Feature Component user render', () => {
    it ('correctly', () => {
        expect(getByTestId(TestId)).toBeInTheDocument();
    })

    it ('user rating', () => {
        expect(getByTestId(TestId + '-rating')).toBeInTheDocument();
    })

    it ('user profile icon', () => {
        expect(getByTestId(TestId + '-profile-picture')).toBeInTheDocument();
    })

    it ('user name', () => {
        expect(getByTestId(TestId + '-name')).toBeInTheDocument();
    })
})