const randomNames = [];
const fs = require('fs');
const path = require('path')
const baseUser = require(path.join(__dirname, './User.json'));
const {v4: uuid} = require('uuid');
const { produce } = require('immer');

const names = require(path.join(__dirname, './firstname.json'));
const fnames = require(path.join(__dirname, './lastname.json'));


const r = () => {
    const fIndex = Math.floor(Math.random() * fnames.length);
    const lIndex = Math.floor(Math.random() * names.length);
    return `${fnames[fIndex]} ${fnames[lIndex]}`
}

const users = [];
for (let x = 0; x < 1000; x++) {
    const id = uuid();
    const highscore = Math.floor(Math.random() * 20000);
    const user = produce(baseUser, (draft) => {
        draft.accountId = id;
        draft.displayName = r();
        draft.highscore = highscore;
        return draft;
    })

    users.push(user);
}


users.sort((a, b) => b.highscore - a.highscore);

fs.writeFileSync(path.join(__dirname, './user.data.json'), JSON.stringify(users, null, ' '));

