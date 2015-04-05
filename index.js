var spawn = require('child_process').spawn;
var debug = require('debug')('sql2csv')
require('String.prototype.endswith')

var sql2csv = {
  postgres: function (db, query, stdout, stderr) {
    if (query.endsWith(';')) {
      query = query.substring(0, query.length -1)
    }
    var fullQuery = "COPY (" + query + ") TO STDOUT WITH CSV HEADER;"
    var args = [db, '-c ' + fullQuery]
    streamExecute('psql', args, stdout, stderr)
  },
  mysql: function (db, query, stdout, stderr) {

  },
  sqlite: function (db, query, stdout, stderr) {
    if (!query.endsWith(';')) {
      query = query + ';'
    }
    var fullQuery = '\\"' + query + '\\"'
    var args = [db, '-header', '-csv', query]
    streamExecute('sqlite3', args, stdout, stderr)
  }
}

function streamExecute(command, args, stdout, stderr) {
  debug('executing', command, args)
  var cmd = spawn(command, args, {
    stdio: [0, stdout, stderr]
  });
}

module.exports = sql2csv
