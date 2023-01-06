const path = require('path');
const fs = require('fs');


const folders = fs.readdirSync(path.join(__dirname, 'src'));
const jsonData = {
    compilerOptions: {
        baseUrl: '.',
        paths: {}
    }
};

folders.forEach(folder => {
    if (fs.lstatSync(path.join(__dirname, 'src', folder)).isDirectory()) {
        jsonData.compilerOptions.paths[folder + '/*'] = [path.join(__dirname, 'src', folder)]
        return;
    }
})


fs.writeFileSync(path.join(__dirname, 'tsconfig.paths.json'), JSON.stringify(jsonData, undefined, '     '))