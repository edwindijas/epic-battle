import { MemoryRouter, Route, Routes } from "react-router-dom"
import { RouterProps } from "./types"
import { PageLanding } from "../pages/landing/PageLanding";
import { PageLeaderBoard } from "pages/leadersboard/LeaderBoard";
import { Game } from "game/Game";

export const Router = ({ children }: RouterProps) => {
    return <MemoryRouter >
        <Routes >
            <Route path="/" element={<PageLanding />} />
            <Route path="/game" element={ <Game /> } />
            <Route path="/leaderboard" element={<PageLeaderBoard />} />
        </Routes>
        { children }
    </MemoryRouter>
}