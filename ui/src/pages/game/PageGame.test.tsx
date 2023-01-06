import { render, screen } from '@testing-library/react'
import { PageGame } from './PageGame'

const PageGameTestId = 'page-game'

beforeEach(() => {
    render(<PageGame />)
})

describe('Page Game', () => {
    it ('renders correclty', () => {
        const { getByTestId } = screen;
        expect(getByTestId(PageGameTestId)).toBeInTheDocument()
    })
})