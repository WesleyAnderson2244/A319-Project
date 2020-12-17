const createAPI = require('./api');
const api = createAPI();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4162;
const hostname = process.env.API_HOST ? process.env. API_HOST : 'localhost';
const scheme = process.env.SECURE_API ? 'https' : 'http';
const origin = `${scheme}://${hostname}:${port}`

api.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Server is running and listening on port ${origin}`);
    /* eslint-enable no-console */
});