var argv = require('minimist')(process.argv.slice(2));
var spawn = require('child_process').spawn;
var debug = require('debug')('sql2csv')
var parseUrl = require('parse-db-url')
require('String.prototype.endswith')

module.exports = sql2csv


var sql2csv = {
  postgres: function (db, query) {
    if (query.endsWith(';')) {
      query = query.substring(0, query.length -1)
    }
    var fullQuery = "COPY (" + query + ") TO STDOUT WITH CSV HEADER;"
    var args = [db, '-c ' + fullQuery]
    streamExecute('psql', args)
  },
  mysql: function (db, query) {

  },
  sqlite: function (db, query) {
    if (!query.endsWith(';')) {
      query = query + ';'
    }
    var fullQuery = '\\"' + query + '\\"'
    var args = [db, '-header', '-csv', query]
    streamExecute('sqlite3', args)
  }
}

function streamExecute(command, args) {
  debug('executing', command, args)
  var cmd = spawn(command, args, {
    stdio: [
      0, // use parents stdin for child
      process.stdout,
      process.stderr
  ]});
}

/** MAIN **/
var USAGE = 'sql2csv <datbase url/location> -c <query> --db <postgres,mysql,sqlite>'
if (argv._.length != 1) return console.error(USAGE)
if (!argv.db) return console.error(USAGE)

var url = argv._[0]

debug('using ', argv.db)
var f = sql2csv[argv.db]
if (f) return f(url, argv.c)
else return console.error('Connection string unrecognized. Did you type it right? \n  ' + URL)
