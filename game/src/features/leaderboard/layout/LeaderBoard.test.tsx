import { screen } from "@testing-library/react";
import { FeatureLeaderBoardLayout } from "./LeaderBoard";
import users from 'mock/user.data.json'

const { getByTestId } = screen,
    TestId = 'feature-leaderboard-layout'


beforeEach(() => {
    testRender(<FeatureLeaderBoardLayout users={users} />)
})

describe('Leader Board feature layout renders', () => {
    it ('correctly', () => {
        expect(getByTestId(TestId)).toBeInTheDocument()
    })

    it ('title', () => {
        expect(getByTestId(TestId + '-title')).toBeInTheDocument()
    })

    it ('leaderboard link', () => {
        expect(getByTestId(TestId + '-lnk-leaderboard')).toBeInTheDocument()
    })

    it ('leaderboard top two', () => {
        expect(getByTestId(TestId + '-members')).toBeInTheDocument()
    })
})