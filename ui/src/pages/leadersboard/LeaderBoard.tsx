import { useNavigate } from "react-router-dom"
import { PageLeaderBoardLayout } from "./layout/LeaderBoard"

export const PageLeaderBoard = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return <PageLeaderBoardLayout handleBack={handleBack} />
}