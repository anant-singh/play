/**
 * Routes
 */

module.exports = function(app) {

    app.get('/login', function(req, res) {
        res.locals = {
            title: 'Arkathon'
        };
        res.render('login', {
            partials: {
                title: 'title'
            }
        });
    });

}