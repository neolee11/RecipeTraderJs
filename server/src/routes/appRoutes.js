var express = require('express');

var appRouter = express.Router();


appRouter.route('/')
    .get(function (req, res) {
        // res.send('root');
        res.render('index',
            {
                title: 'hello handle bar 2'
            }
        );
    });

appRouter.route('/great')
    // .all(req, res, next)
    .get(function (req, res) {
        res.send('great!');
    });

appRouter.route('/great/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.send('great!' + id);
    });

module.exports = appRouter;