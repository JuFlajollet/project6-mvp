# project6-mdd
Sixth project of OpenClassrooms Java/Angular Fullstack Training Course.

The original source code comes from [this repository in the OpenClassrooms Student Center](https://github.com/OpenClassrooms-Student-Center/Developpez-une-application-full-stack-complete).

## Development server

### Resources

#### MySQL

SQL script for creating the schema is available there: `resources/sql/script.sql`

### Global Setup

_Requirements:_
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node >= 20.14.0](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [OpenJDK21](https://openjdk.org/install/) or [Oracle JDK21](https://www.oracle.com/fr/java/technologies/downloads/#java21)
- [MySQL Database >= 8.0](https://dev.mysql.com/doc/mysql-getting-started/en/)
- An IDE for Java ([Eclipse](https://eclipseide.org/)/[IntelliJ](https://www.jetbrains.com/idea/download/?section=windows)/etc.)
- An IDE for Angular ([VSCode](https://code.visualstudio.com/download)/etc.)

#### Setup DB

In my SQL command line (Or you can use a database tool like [DBeaver](https://dbeaver.io/)):

> mysql> CREATE DATABASE mdd;

> mysql> USE mdd;

> mysql> SOURCE /path/to/file.sql

> mysql> CREATE USER 'dbuser'@'localhost' IDENTIFIED BY 'dbpassword';

> mysql> GRANT SELECT, INSERT, UPDATE, DELETE ON test . * TO 'dbuser'@'localhost';

You can change `user`, `password` or `database name` but you will have to change the `application.properties` in the back end project accordingly.

SQL script for creating the schema (the one used with SOURCE) is available there: `resources/sql/script.sql`