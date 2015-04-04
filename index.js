var argv = require('minimist')(process.argv.slice(2));
var spawn = require('child_process').spawn;
var debug = require('debug')('sql2csv')
var parseUrl = require('parse-db-url')

module.exports = sql2csv
var sql2csv = {
  postgres: function (url) {
    var db = url
    var query = "COPY (" + argv.c + ") TO STDOUT WITH CSV HEADER;"
    debug('executing', query)
    streamExecute('psql', [db, '-c ' + query])
  },
  mysql: function (url) {

  },
  sqlite: function (url) {

  }
}

function streamExecute(command, args) {
  var cmd = spawn(command, args, {
    stdio: [
      0, // use parents stdin for child
      process.stdout,
      process.stderr
  ]});
}

/** MAIN **/

if (argv._.length != 1) return console.error('sql2csv <datbase url> -c <query> ')
var URL = argv._[0]
var dbConfig = parseUrl(URL)

debug('using ', dbConfig.adapter)
var f = sql2csv[dbConfig.adapter]
if (f) return f(URL)
else return console.error('Connection string unrecognized. Did you type it right? \n  ' + URL)
