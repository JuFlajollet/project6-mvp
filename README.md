# Project6 - MDD Application
Sixth project of OpenClassrooms Java/Angular Fullstack Training Course.

The original source code comes from [this repository in the OpenClassrooms Student Center](https://github.com/OpenClassrooms-Student-Center/Developpez-une-application-full-stack-complete).

## Development server

### Resources

#### MySQL

SQL script for creating the schema is available there: `resources/sql/script.sql`

#### Postman collection

A Postman collection is available there: `resources/postman/MDD.postman_collection.json`

#### Javadoc

A Javadoc is available there: `resources/javadoc/index.html`

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

> mysql> GRANT SELECT, INSERT, UPDATE, DELETE ON dbuser . * TO 'dbuser'@'localhost';

You can change `user`, `password` or `database name` but you will have to change the `application.properties` in the back end project accordingly.

SQL script for creating the schema (the one used with SOURCE) is available there: `resources/sql/script.sql`

#### Setup Back

- Clone the project (if you didn't do already):

> git clone https://github.com/JuFlajollet/project6-mdd/

- Launch your preferred IDE and open the folder where you cloned the backend project.
- Select the release branch
- Check if you have correct JDK version for project (Java 21) and Maven.
- Download dependencies and build project through Maven:

> mvn clean install

- Run the application (`MddApiApplication.java`).

#### Setup and launch Front

- Clone the project (if you didn't do already):

> git clone https://github.com/JuFlajollet/project6-mdd/

- Go inside front folder:

> cd front

- Install dependencies:

> npm install

- Launch Front-end:

> npm run start;

If you didn't install DB and launch the Back, you won't be able to go further than homepage, login and register.

By default, the user account that you can use to connect is:
- login: Test
- password: Test!123456
