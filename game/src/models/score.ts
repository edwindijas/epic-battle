import { invoke } from "@forge/bridge";
const saveFunc = 'saveHighscore'
export const saveScore = (highscore: number) => {
    invoke(saveFunc, {highscore}).then((data) => {
        console.log(data, 'high-score-saved')
    }).catch(e => {
        
    })
}