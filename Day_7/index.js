const fs = require('fs');
const path = require('path');
console.log(`Memory usage before creating read stream for large file = ${process.memoryUsage().rss}`)
for (let i = 0; i < 50000; i++) {
    fs.appendFileSync(path.resolve('data/largeFile.txt'), 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', (err) => {
        if (err) throw err;
        // console.log("Succesfully Appended");
    })
};
fs.createReadStream(__dirname + '/data/largeFile.txt', 'utf-8');
console.log(`Memory usage after creating read stream for large file = ${process.memoryUsage().rss}`)
