#!/usr/bin/env node
var sql2csv = require('./index.js')
var debug = require('debug')('sql2csv')
var argv = require('minimist')(process.argv.slice(2));

var USAGE = 'sql2csv --db <postgres,mysql,sqlite> <datbase url/location> -c <query>'
if (argv._.length != 1) return console.error(USAGE)

var url = argv._[0]
var database = argv.db

if (!database) database = sql2csv.guess(url)
debug('using ', database)
var f = sql2csv[database]
if (f) return f(url, argv.c, process.stdout, process.stderr)
else return console.error('Connection string unrecognized. Did you type it right? \n  ' + url)
