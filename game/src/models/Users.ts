
import { requestJira } from '@forge/bridge';
import { User } from './types';
import GuestUser from "mock/User.json";

const BASE_URL = '/rest/api/3/'

const URL_CURRENT_USER = BASE_URL + 'myself'

export const getUser = async () => {
    return await requestJira(URL_CURRENT_USER).then(
        (response: any) => {
            return response.json() as unknown
        }
    ).then((response) => {
       return response as User;
    }).catch((e) => {
       return GuestUser;
    })
}