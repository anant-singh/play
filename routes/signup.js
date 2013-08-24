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
        console.log(req.body);
        var data = {};
        data.form = req.body;
        data.accountCreated = true;
        res.json(data);
        console.log(data);
    });
}