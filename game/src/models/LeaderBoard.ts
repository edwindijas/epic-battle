import { invoke } from '@forge/bridge';
//import { invoke } from './bridge';
import { User } from './types';
import MockUsers from "mock/user.data.json";
import { getAllUsersRecursive } from './Users';
import produce from 'immer';

const BASE_URL = '/rest/api/3/'

const URL_CURRENT_USER = BASE_URL + 'myself'

export const getLeaderBoard = async (): Promise<User[]> => {
   const highScores = await fetchLeaderBoard();
   const allUsers = await getAllUsersRecursive();

   highScores.sort((a, b) => {
    const highScoreA = a.highscore || 0;
    const highScoreB = b.highscore || 0;
    return  highScoreB - highScoreA;
   })

   const data = combineData(highScores, allUsers);

   console.log(allUsers);

   return data;
}

export const combineData = (highscores: User[], users: User[]) => {
    const usersMap = new Map<string, User>();
    users.forEach(user => {
        const {accountId} = user;
        usersMap.set(accountId, user);
    });

    return highscores.map(highscore => {
        const { accountId, highscore: nHighScore } = highscore;
        const user = usersMap.get(accountId);
        if (!usersMap.has(accountId) || !user) {
            return highscore;
        }
        return produce(user, draft => {
            draft.highscore = nHighScore
            return draft;
        })
    })
}


export const fetchLeaderBoard = async (cursor?: string): Promise<User[]>  => {
    const {results, nextCursor} = await getLeaderBoardData(cursor);
    if (results.length === 0 || !nextCursor) {
        return results;
    }

    const combi =  [...results, ...await fetchLeaderBoard(nextCursor)];
    
    return combi;
}



const getLeaderBoardData = async (cursor?:string) => {
    const payload = {} as { cursor?: string  };
    if (cursor) {
        payload.cursor = cursor;
    }

    return await invoke('getHighscores', payload).then(
        (response: any) => {
            return response.json() as unknown
        }
    ).then((response) => {
        console.log(response);
       return response as {
        nextCursor: string,
        results: User[]
       };
    }).catch((e) => {
       return {
        results: MockUsers,
        nextCursor: ''
       };
    })

}