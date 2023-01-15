import { screen } from "@testing-library/react";
import {LeaderBoardFeatureUser} from './User'
import users from "mock/user.data.json"

const TestId = 'feature-leaderboard-component-user',
    { getByTestId } = screen;

const sampleUsers = [
    {
        name: 'Edwin Chiwona',
        highScore: 900,
        position: 1
    },
    {
        name: 'Wonderful Kunje',
        highScore: 900,
        position: 1
    },
]
    
    
beforeEach(() => {
    testRender(<LeaderBoardFeatureUser {...users[0]} position={1} />)
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