import { invoke } from '@forge/bridge';
//import { invoke } from './bridge';
import { User } from './types';
import GuestUser from "mock/User.json";

const BASE_URL = '/rest/api/3/'

const URL_CURRENT_USER = BASE_URL + 'myself'

export const getUser = async () => {
    return await invoke('getUser').then(
        (response: any) => {
            return response as unknown
        }
    ).then((response) => {
       return response as User;
    }).catch((e) => {
        console.log(e);
       return GuestUser;
    })
}


export const getAllUsersRecursive = async (startAt = 0): Promise<User[]>  => {
    const results = await getUserBatch(startAt);

    if (results.length === 0) {
        return results;
    }

    const combi =  [...results, ...await getAllUsersRecursive(startAt + results.length)];
    return combi;
}

const getUserBatch = async (startAt: number) => {
    const payload = { startAt };
    return await invoke('getAllUsers', payload).then((response) => {
       return response as User[]
    })

}