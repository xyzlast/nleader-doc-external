var express = require('express'),
  config = require('./config/config');

// var sql = require('mssql');
// console.log('db connect start');
// var conn = sql.connect({
//   user: 'dazone',
//   password: 'workcrew',
//   server: '222.111.242.137',
//   database: 'WorkCrewNET60c'
// }, function(err) {
//   if(err) {
//     console.log('error');
//     console.error(err);
//   }
// });

var tds = require('tds');
var conn = new tds.Connection({
  host: '222.111.242.137',
  port: 1433,
  userName: 'dazone',
  password: 'workcrew',
  database: 'WorkCrewNET60c'
});
conn.connect(function(error) {
  if (error != null) {
    console.error('Received error', error);
  } else {
    console.log('Now connected, can start using');
    var stmt = conn.createStatement('SELECT 1');
    stmt.on('row', function(row) {
      console.log('Received row: ', row.getValue(0));
    });
    stmt.execute();
  }
});





var app = express();

require('./config/express')(app, config);

app.listen(config.port);

