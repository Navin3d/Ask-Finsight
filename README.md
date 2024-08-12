# Ask-Finsight
This is an Alexa Skill Kit Application performs Backend call and reads users notifications.

```bash
@echo off
set MAVEN_HOME=C:\apache-maven-3.8.6
set PATH=%MAVEN_HOME%\bin;%PATH%
mvn %*
```
```bash
- mvn versions:set -DnewVersion=1.0.1-SNAPSHOT
  - mvn release:prepare -DreleaseVersion=1.0.1 -DdevelopmentVersion=1.0.2-SNAPSHOT
  - mvn release:perform
```
```bash
SELECT t1.*
FROM table1 t1
LEFT JOIN table2 t2 ON t1.id = t2.id  -- Replace 'id' with the primary key or unique columns
WHERE t2.id IS NULL;

SELECT * FROM table1
MINUS
SELECT * FROM table2;

SELECT COALESCE(t1.id, t2.id) AS id,
       t1.column1 AS table1_column1,
       t2.column1 AS table2_column1,
       -- add more columns as needed
FROM table1 t1
FULL OUTER JOIN table2 t2 ON t1.id = t2.id  -- Replace 'id' with the primary key or unique columns
WHERE t1.id IS NULL OR t2.id IS NULL;
```
