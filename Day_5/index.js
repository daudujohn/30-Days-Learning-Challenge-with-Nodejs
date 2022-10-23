const minimist = require('minimist');
require('dotenv').config();

const args = minimist(process.argv.slice(2))

const PORT = args.PORT
/**
 * @type {string}
 */
const MODE = process.env['MODE'] 
console.log(process.env)
if (MODE == 'production') {
    console.log('Server running in production mode');
}
else if(MODE == 'development'){
    console.log('Server running in development mode');
}
else{
    console.log('MODE environment variable not set. Exiting...')
    process.exit()
}

console.log(`Server running on PORT: ${PORT}`)

