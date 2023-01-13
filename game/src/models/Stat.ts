export interface GameData {
    score: number,
    life: number,
    lifeMax: number,
    multiplier: number,
    armo: number,
    armoMax: number
}



export type StatListener = (score: GameData) => void
