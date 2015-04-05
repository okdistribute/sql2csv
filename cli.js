#!/usr/bin/env node
var sql2csv = require('./index.js')
var debug = require('debug')('sql2csv')
var argv = require('minimist')(process.argv.slice(2));

var USAGE = 'sql2csv <datbase url/location> -c <query> --db <postgres,mysql,sqlite>'
if (argv._.length != 1) return console.error(USAGE)
if (!argv.db) return console.error(USAGE)

var url = argv._[0]

debug('using ', argv.db)
var f = sql2csv[argv.db]
if (f) return f(url, argv.c, process.stdout, process.stderr)
else return console.error('Connection string unrecognized. Did you type it right? \n  ' + URL)
