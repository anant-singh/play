/**
 * Routes
 */

module.exports = function(app) {

    app.get('/signup', function(req, res) {
        res.locals = {
            title: 'Arkathon'
        };
        res.render('signup', {
            partials: {
                title: 'title'
            }
        });
    });

}