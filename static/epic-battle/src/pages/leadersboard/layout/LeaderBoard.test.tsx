
import { screen } from "@testing-library/react"
import { PageLeaderBoardLayout } from "./LeaderBoard"

const testid = 'page-leader-board-layout',
    { getByTestId } = screen;

beforeEach(() => {
    testRender(<PageLeaderBoardLayout />)
})

describe('Page Leaderboard layout', () => {
    it ('renders', () => {
        expect(getByTestId(testid)).toBeInTheDocument()
    })

    it ('has title', () => {
        expect(getByTestId(testid + '-title')).toBeInTheDocument()
    })

    it ('has back button', () => {
        expect(getByTestId(testid + '-btn-back')).toBeInTheDocument()
    })

    it ('has next button', () => {
        expect(getByTestId(testid + '-btn-next')).toBeInTheDocument()
    })

    it ('has prev button', () => {
        expect(getByTestId(testid + '-btn-prev')).toBeInTheDocument()
    })
})