export interface GameStat {
    score: number,
    life: number,
    maxLife: number,
}



export type StatListener = (score: GameStat) => void

export type AddStatListener = (listener: StatListener) => string

export type RemoveStatListener = (id: string) => void