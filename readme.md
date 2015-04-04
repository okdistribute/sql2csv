# sql2csv

[![NPM](https://nodei.co/npm/sql2csv.png)](https://nodei.co/npm/sql2csv/)

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
