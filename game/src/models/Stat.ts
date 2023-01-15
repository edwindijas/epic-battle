export interface GameData {
    score: number,
    life: number,
    lifeMax: number,
    boost: number,
    armo: number,
    armoMax: number
}



export type StatListener = (score: GameData) => void
