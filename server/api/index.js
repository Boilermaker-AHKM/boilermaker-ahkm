const router = require('express').Router();

router.get('/users', (req, res, next) => {
    User.findAll()
        .then(users => res.send(batters))
        .catch(next);
})