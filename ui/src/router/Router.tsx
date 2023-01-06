import { MemoryRouter, Route, Routes } from "react-router-dom"
import { RouterProps } from "./types"
import { PageGame } from "../pages/game/PageGame";
import { PageLanding } from "../pages/landing/PageLanding";
import { PageLeaderBoard } from "pages/leadersboard/LeaderBoard";

export const Router = ({ children }: RouterProps) => {
    return <MemoryRouter >
        <Routes >
            <Route path="/" element={<PageLanding />} />
            <Route path="/game" element={ <PageGame /> } />
            <Route path="/leaderboard" element={<PageLeaderBoard />} />
        </Routes>
        { children }
    </MemoryRouter>
}