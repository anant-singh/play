
var fs              = require('fs'),
    connectAssets   = require('connect-assets');

module.exports = function(app, express) {

    app.use(express.logger({
        format:     'tiny',
        stream:     fs.createWriteStream('logs/node.log')
    }));

    //Enable dependency based asset loading
    //Setup concatenate and compress build dir
    app.use(connectAssets({
        src:        __dirname + "/../public",
        buildDir:   'public_build'
    }));

    app.use(express.compress());
    app.use(express.staticCache());

    app.use(express.errorHandler());

}
