
// -- Global Settings
var settings = {
    'siteName'      : 'arkathon',
    'sessionSecret' : 'sessionSecret',
    'uri'           : 'http://localhost',
    'port'          : process.env.PORT || 8080,
    'debug'         : 0,
    'profile'       : 0
};

/**
 * Default configuration manager
 * Inject app and express reference
 */

module.exports = function(app, express, env) {

    // -- Development
    if ('development' == env) {
        require('./development')(app, express);
    }

    // -- Production
    if ('production' == env) {
        require('./production')(app, express);
    }

};

module.exports.settings = settings;