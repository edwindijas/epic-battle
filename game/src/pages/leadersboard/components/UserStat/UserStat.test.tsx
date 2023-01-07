import { screen } from '@testing-library/react'
import { PageLeadersBoardUser } from "./UserStat";
import mockUser  from 'mock/User.json';

const testid = 'page-leaderboard-user',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<PageLeadersBoardUser user={mockUser} index={1} />)
})

describe('Page LeaderBoard User renders', () => {
    it ('correctly', () => {
        expect(getByTestId(testid)).toBeInTheDocument()
    })

    it ('user rating', () => {
        expect(getByTestId(testid + '-rating')).toBeInTheDocument();
    })

    it ('user profile icon', () => {
        expect(getByTestId(testid + '-profile-picture')).toBeInTheDocument();
    })

    it ('user name', () => {
        expect(getByTestId(testid + '-name')).toBeInTheDocument();
    })

    it('user score', () => {
        expect(getByTestId(testid + '-score')).toBeInTheDocument();
    })
})