//import { requestJira } from '@forge/bridge';
import { requestJira } from './bridge';
import { User } from './types';
import MockUsers from "mock/user.data.json";

const BASE_URL = '/rest/api/3/'

const URL_CURRENT_USER = BASE_URL + 'myself'

export const getLeaderBoard = async () => {
    return await requestJira(URL_CURRENT_USER).then(
        (response: any) => {
            return response.json() as unknown
        }
    ).then((response) => {
       return response as User[];
    }).catch((e) => {
       return MockUsers;
    })
}