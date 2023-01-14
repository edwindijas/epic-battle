import Resolver from '@forge/resolver';
import api, {route, startsWith, storage} from "@forge/api"
const resolver = new Resolver();

const BASE_URL = '/rest/api/3/'
const URL_CURRENT_USER = BASE_URL + 'myself'

const STORAGE_HIGHSCORE = 'game-highscore'

const getCurrentUser = async () => {
  return await (await api.asUser().requestJira(route`${URL_CURRENT_USER}`)).json();
}

//const getAllUsersWithId = 


resolver.define('status', (req) => {
  return 'Hello, world!';
});


resolver.define('getHighscores', async (req) => {

  const scores = await storage.query().limit(20).where('key', startsWith(STORAGE_HIGHSCORE)).getMany();

  const userId = scores.results.map(score => score.accountId)

  return {scores};
})

resolver.define('saveHighscore', async({payload}) => {
  const { accountId } = await getCurrentUser();
  const {highscore} = payload;

  const key = STORAGE_HIGHSCORE + `-${accountId}`;
  const userHighScore = await storage.get(key);

  if (userHighScore && userHighScore.highscore > highscore) {
    return {
      ok: false,
      message: 'Not High score',
      userHighScore,
      highscore
    }
  }

  
  storage.set(key, {
    highscore,
    accountId
  })
  return {
    ok: true,
    highscore
  }
})

export const handler = resolver.getDefinitions();
