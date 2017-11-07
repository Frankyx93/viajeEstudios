'use strict';

var dsConfig = require('../datasources.local.js');
var path = require('path');

module.exports = function(server) {

  var router = server.loopback.Router();

  //login page
  router.get('/', function(req, res) {
    var credentials = dsConfig.myEmailDataSource.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });
  
  //verified
  server.get('/verified', function(req, res) {
    res.render('verified');
});
    server.use(router);
  };
