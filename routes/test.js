/**
 * Routes
 */

module.exports = function(app) {

    app.get('/widgets', function(req, res) {
        res.render('widgets');
    });

    app.get('/ui', function(req, res) {
        res.render('ui');
    });
}