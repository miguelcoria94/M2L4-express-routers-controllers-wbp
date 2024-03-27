const eateries = require('../models/eatery');

function index(req, res) {
    res.render('eateries/index', {
        eateries: eateries.getAll(),
    });
}

function show(req, res) {
    res.render('eateries/show', {
        eatery: eateries.getOne(req.params.id),
    });
}

module.exports = {
    index,
    show,
};