const { Router } = require('express');

const router = new Router();


router.get('/status', (req, resp) => {
    resp.status(200).json({
        status: 'OK',
        message: 'The API is operating as expected'
    });
});

module.exports = router;