const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


/**
 * Create an express API and return it 
 * @param {Object} options - API options, including CORS options 
 * @retruns {Express} - the API
 */
function createAPI (options) {
    const api = express();

    api.use(helmet());
    api.use(cors(options && options.hasOwnProperty('cors') ? options.cors : {}));

    api.use('/', require('./lib/routes/status'));
    api.use('/final-project', require('./lib/routes/final-project'));

    api.get('/error', (req, resp) =>{
        throw new error('You Broke It');
    });
    return api;
}

module.exports = createAPI;