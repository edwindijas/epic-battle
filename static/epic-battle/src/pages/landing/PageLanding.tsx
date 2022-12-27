import { Link } from "react-router-dom"

const LandingTestId = 'page-landing'

export const PageLanding = () => {
    return <div data-testid={LandingTestId} >
        <Link to='/game' data-testid={LandingTestId + '-lnk-game'} >Go to game Page</Link>
    </div>
}