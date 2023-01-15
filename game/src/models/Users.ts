//import { invoke } from '@forge/bridge';
import { invoke } from './bridge';
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
        console.log(response);
       return response as User;
    }).catch((e) => {
        console.log(e);
       return GuestUser;
    })
}