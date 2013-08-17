/**
 * Routes
 */

module.exports = function(app) {

    app.get('/faq', function(req, res) {
        res.locals = {
            title: 'Arkathon'
        };
        res.render('faq', {
            partials: {
                title: 'title'
            }
        });
    });

}