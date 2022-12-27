import { MemoryRouter, Route, Routes } from "react-router-dom"
import { RouterProps } from "./types"
import { PageGame } from "../pages/game/PageGame";
import { PageLanding } from "../pages/landing/PageLanding";

export const Router = ({ children }: RouterProps) => {
    return <MemoryRouter >
        <Routes >
            <Route path="/" element={<PageLanding />} />
            <Route path="/game" element={ <PageGame /> } />
        </Routes>
        { children }
    </MemoryRouter>
}