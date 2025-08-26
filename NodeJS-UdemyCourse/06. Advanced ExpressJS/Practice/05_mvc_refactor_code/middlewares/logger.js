const fs = require('node:fs');

function loggerMiddleware (req, res, next) {
    const logMessage = `[${Date.now()}]: ${req.method} ${req.path} \n`
    fs.appendFileSync('logs.txt', logMessage, 'utf-8');
    next()
}

module.exports = loggerMiddleware;