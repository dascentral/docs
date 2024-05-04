# MySQL

[MySQL](https://www.mysql.com/) is an open-source relational database management system. Its name combines "My," the name of co-founder Michael Widenius's daughter My, and "SQL," the abbreviation for Structured Query Language.

## User Administration

All of the commands below should be run against the `mysql` database. You should execute a `FLUSH PRIVILEGES;` for changes to take affect.

### Application Users

I recently began using MySQL 8.0 which has me using a new syntax for application users.

```sql
USE mysql;
CREATE USER '[USER]'@'127.0.0.1' identified with mysql_native_password by 'password';
GRANT ALL PRIVILEGES ON `[DATABASE]`.* TO '[USER]'@'127.0.0.1';
FLUSH PRIVILEGES;
```

### Administrative Users

These statements will create a user that can do anything from anywhere. Be careful with these.

```sql
USE mysql;
CREATE USER 'USER'@'%' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO 'dsmith'@'%';
FLUSH PRIVILEGES;
```

### Read-only Users

```sql
USE mysql;
CREATE USER '[USER]'@'localhost' IDENTIFIED BY 'some_strong_password';
GRANT SELECT, SHOW VIEW ON `[DATABASE]`.* TO '[USER]'@'localhost';
FLUSH PRIVILEGES;
```

### Password Policy

**Show Policy**

```sql
SHOW VARIABLES LIKE 'validate_password%';
```

**Change Policy**

```sql
SET GLOBAL validate_password_policy=LOW;
```

## Table Modifications

**Adding Columns**

```sql
ALTER TABLE table_name ADD new_column INT(11) AFTER existing_column;
ALTER TABLE table_name ADD new_column VARCHAR(255) AFTER existing_column;
```

**Alter column order**

Let's say you want to move a column to a different spot because you feel column order is really important (which it is). You essentially redefine the column and add an `after` clause.

```sql
ALTER TABLE table_name MODIFY column date not null AFTER id;
```

**Create UTF8 Database**

```sql
CREATE DATABASE name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**Change Auto_Increment**

```sql
ALTER TABLE table_name AUTO_INCREMENT = xxx;
```

## mysqldump

The following script will dump the provided database, excluding the `CREATE DATABASE` statement.

```bash
sudo mysqldump databasename > databasename_dump.sql
```

The following command will export a full database and will **include** the statements necessary to create the database. (CREATE DATABASE / USE dbname) This is the optimal command when backing up and restoring to the same database.

```bash
sudo mysqldump --databases databasename > databasename_dump.sql
```

Or, maybe you want to dump the entire contents of your database server:

```bash
sudo mysqldump --all-databases > full.sql
```

### Data Dump Only

Use the following command to dump only the data, not the `CREATE` statements.

```bash
sudo mysqldump --no-create-info DBNAME > DBNAME_data_dump.sql
```

The following command will only dump the data from the specified tables.

```bash
sudo mysqldump --no-create-info DBNAME TABLE1 TABLE2 > DBNAME_data_dump.sql
```

## Constraints

### Adding FK Constraints

```sql
ALTER TABLE table1
ADD CONSTRAINT table1_column1 FOREIGN KEY (column1)
REFERENCES table2 (column2) ON UPDATE CASCADE ON DELETE CASCADE;
```

### Unique Constraints

```sql
ALTER TABLE table1 ADD UNIQUE (column1);
```

## Triggers

### Definition

**Set timestamp on insert**

```sql
CREATE TRIGGER table_date_created BEFORE INSERT ON table FOR EACH ROW set NEW.date_created = NOW();
```

**Set timestamp on update**

```sql
CREATE TRIGGER table_last_updated BEFORE UPDATE ON table FOR EACH ROW set NEW.last_updated = NOW();
```

### Importing/Exporting

**Dump trigger definitions into a file**

```bash
sudo mysqldump --triggers --add-drop-trigger --no-create-info --no-data --no-create-db --skip-opt test > ~/triggers.sql
```

If you are migrating triggers, you may need to manually edit the `triggers.sql` file and set the `DEFINER` to a user that is appropriate for the server that you are moving to.

**Importing triggers**

This command is the same as most MySQL operations:

```bash
sudo mysql < ~/triggers.sql
```

## Legacy Content



**Timezones**

**Source:** https://javorszky.co.uk/2016/06/06/today-i-learned-about-mysql-and-timezones/

**Relevant Timezones - As of April 2019**

- My timezone: UTC-4 (EDT)
- Server timezone: UTC-4 (EDT)
- MySQL timezone: UTC-4 (EDT)
- MySQL connection: ?? - I do not believe this is set
- PHP timezone: America/New_York (UTC-4)

**TIMESTAMP**

What I learned from the article above is that the TIMESTAMP field will (behind the scenes) store all values in UTC. However, data is displayed and queried in the server's timezone.

Query the current timezone setting via the following:

```sql
SELECT @@global.time_zone;
```

However, that is likely to show you "SYSTEM" which (I think) means it is pulling timezone information from the server. This command will show you the real value:

```sql
SELECT TIMEDIFF( now(), utc_timestamp() );
```

When you insert data into a timestamp field, it uses the timezone setting to convert to UTC for storage. So if you insert data in EDT and then change the server timezone, the value returned via query is in the NEW timezone.

So, the author contends (and I think I agree) that timezones are great when you need a fixed point in time AND your code/application knows dates are provided and retrieved in the local timezone of the system.

It is important to note that TIMESTAMP fields are stored as a 32-bit integer so they have a potentially limited range. The minimum value is 1970-01-01 00:00:00 and the maximum is 2038-01-19 03:14:07.

**DATETIME**

DATETIME fields do NOT store timezone information so what you put in is what you get out, regardless of server timezone settings.

The author contends (although not sure yet if I agree) that DATETIME fields are best when your application provides all dates in UTC. He hates on TIMESTAMP a bit for changing its response based upon TZ setting. I'm not sure I agree that's a "bad" thing.