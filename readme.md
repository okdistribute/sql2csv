# sql2csv

[![NPM](https://nodei.co/npm/sql2csv.png)](https://nodei.co/npm/sql2csv/)

```
$ npm install -g sql2csv
```

# Usage
```
$ sql2csv <datbase url/location> -c <query> --db <postgres,mysql,sqlite>
```

To a file:
```
$ sql2csv test.db -c "SELECT id,name from users" --db sqlite > users.csv
$ ls
users.csv
$ cat users.csv
ID,name
3,karissa
4,dave
5,ryan
```

# JavaScript
*TODO: make more JS friendly*


## postgres

```
$ sql2csv -c "SELECT id,amount,debt_type from users"  "postgres://localhost/debtis"  --db postgres
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

## mysql

*coming soon*

## sqlite

```
$ sql2csv test.db -c "SELECT * from users;" --db sqlite
ID,name
3,karissa
4,dave
5,ryan
```
