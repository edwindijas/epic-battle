//import { invoke } from '@forge/bridge';
import { invoke } from './bridge';
import { User } from './types';
import GuestUser from "mock/User.json";
import mockUsers from "mock/user.data.json"
import { getPromiseFunc } from 'library/main';

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
       return GuestUser as User;
    })
}


export const getAllUsersRecursive = async (startAt = 0): Promise<User[]>  => {
    const {promise, resolve} = getPromiseFunc<User[]>();
    const users = getUserBatch(startAt);
    users.then(async (results) => {
        if (results.length === 0) {
            return resolve([]);
        }
        const nextResults = await getAllUsersRecursive(startAt + results.length);
        resolve([...results, ...nextResults]);

    }).catch(e => {
        resolve(mockUsers)
    })

    return promise;

}

const getUserBatch = async (startAt: number) => {
    const payload = { startAt };
    return await invoke('getAllUsers', payload).then((response) => {
       return response as User[]
    })

}