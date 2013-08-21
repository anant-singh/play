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

    app.post('/signup', function(req, res) {
        res.locals = {
            title: 'Arkathon-Post'
        };
        res.render('signup', {
            partials: {
                title: 'title'
            }
        });
    });
}