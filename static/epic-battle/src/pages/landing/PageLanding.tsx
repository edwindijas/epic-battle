import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom"
import { LandingLayout } from "./layout/LandingLayout"

const LandingTestId = 'page-landing',
    messageId = 'app.page.home'

export const PageLanding = () => {
    return <div data-testid={LandingTestId} >
        <LandingLayout />
    </div>
}