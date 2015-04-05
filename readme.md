# sql2csv

[![NPM](https://nodei.co/npm/sql2csv.png)](https://nodei.co/npm/sql2csv/)

![dat](http://img.shields.io/badge/Development%20sponsored%20by-dat-green.svg?style=flat)

We want to be able to get data in csv format using a particular sql command. However, it'd be slow to load it into a program and format it into csv just to write it out again. Thankfully, each sql flavored database has its own way to format its results in csv form for fast access, but they're all slightly different. It'd be nice if we didn't have to remember all of those particularities.

Thus, sql2csv takes your SELECT statement and translates it into CSV output on process.stdout for the particular database you want. Its fast, and streaming, because we don't do any transformation -- the data comes directly from the database to be piped to wherever you want.

```
$ npm install -g sql2csv
```

## Usage
```
$ sql2csv --db <postgres,mysql,sqlite> <datbase url/location> -c <query>
```

### Example with data to a file
```
$ sql2csv --db sqlite test.db -c "SELECT * from users"  > users.csv

$ ls
users.csv

$ cat users.csv
ID,name
3,karissa
4,dave
5,ryan
```

## Examples

### postgres

```
$ sql2csv --db postgres "postgres://localhost/debtis" -c "SELECT id,amount,debt_type from users"
id,amount,kind
1,80000,student
2,80000,student
3,80000,student
4,80000,
5,80000,student
6,80000,student
7,80234,student
8,300000,auto
```


## sqlite

```
$ sql2csv --db sqlite test.db -c "SELECT * from users;"
ID,name
3,karissa
4,dave
5,ryan
```

### mysql

*TODO*

### JavaScript
*TODO*
