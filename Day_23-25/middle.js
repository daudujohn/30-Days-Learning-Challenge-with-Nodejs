const sup = (req, res, next) => {
    console.log('sup');
    next();
}

const how = (req, res, next) => {
    console.log('How you doin?')
    next();
}

module.exports = {sup, how};