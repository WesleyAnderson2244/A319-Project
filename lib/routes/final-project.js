const { Router, json } = require('express');

const router = new Router();


router.get('/status', (req, resp) => {
    resp.status(200).json({
        id: 2244,
        status: 'OK',
        message: 'It is operating'
    });
});

router.put('/new', json(), (req, resp) => {
    //Read the body and process it
    console.log(req.body)
    const sensor = req.body;
    resp.status(201).json({
        status: 'New sensor created',
        id: sensor.id
    });
});

module.exports = router;