import Resolver from '@forge/resolver';
import api, {route, startsWith, storage} from "@forge/api"
import userData from "./user.data.json";

const resolver = new Resolver();
const BASE_URL = '/rest/api/3/'
const URL_CURRENT_USER = BASE_URL + 'myself'
const URL_ISSUE_SEARCH = BASE_URL + '/search'
const JQL_RESOLVED_ISSUES = 'assignee=currentUser() AND resolved >= startOfMonth() ORDER BY created DESC';
const JQL_UNRESOLVED_ISSUES_DUE_MONTH = 'assignee=currentUser() and resolution=Unresolved AND duedate >= startOfMonth() AND duedate <= endOfMonth() ORDER BY created DESC';
const STORAGE_HIGHSCORE = 'game-highscore'


//const getAllUsersWithId = 


resolver.define('status', (req) => {
  return 'Hello, world!';
});



resolver.define('getUser', async (req) => {
  const user = await getCurrentUser();
  const resolvedCount = await getJQLTotal(JQL_RESOLVED_ISSUES);
  const unresolvedCount = await getJQLTotal(JQL_UNRESOLVED_ISSUES_DUE_MONTH);
  const total = resolvedCount + unresolvedCount;
  const boost = total ? Math.floor((resolvedCount / total) * 30) : 1;
  user.jiraBoost = boost;
  return user;
})


resolver.define('getHighscores', async ({payload}) => {
  const query = storage.query().limit(20).where('key', startsWith(STORAGE_HIGHSCORE));
  const { cursor } = payload;
  if (cursor) {
    query.cursor(cursor);
  }

  const scores =  await query.getMany();
  return {scores};
})

resolver.define('saveSampleData', async () => {
  let count = 0;
  const users = userData.slice(0, 50);
  for (let x = 0; x < users.length; x++) {
    const user = users[x];
    const result = await saveHighscore({ payload: user });
    count += 1;
  }
  return {ok: true, count, users}
})

resolver.define('saveHighscore', async({payload}) => {
  const { accountId } = await getCurrentUser();
  const { highscore } = payload;

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
});


resolver.define('getAllUsers', async ({payload}) => {
  const startAt = payload.startAt || 0;
  const results = await api.asUser().requestJira(route`/rest/api/3/users/search?startAt=${startAt}`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return await results.json();
})

const getCurrentUser = async () => {
  return await (await api.asUser().requestJira(route`${URL_CURRENT_USER}`)).json();
}

const getJQLTotal = async (jql) => {
  var bodyData = {jql, maxResults: 1};
  const response = await api.asUser().requestJira(route`${URL_ISSUE_SEARCH}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  });

  const results = await response.json()
  return results.total;
}



export const handler = resolver.getDefinitions();


