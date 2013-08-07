/**
 * Routes
 */

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Arkathon App'
        });
    });

    /**
     * Errors
     */

    app.get('/404', function(req, res, next) {
        next();
    });

    app.get('/403', function(req, res, next) {
        var err = new Error('Not Allowed!');
        err.status = 403;
        next(err);
    });

    app.get('/500', function(req, res, next) {
        next(new Error());
    });

}