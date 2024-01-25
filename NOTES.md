# Demo NestJS API

---

## How to setup MySql database?

Run the following command
`docker-compose up -d`

Connect to the container shell
`docker exec -it <container_id_or_name> sh`

Connect to the MySQL docker instance
`mysql -u root -p`

Show all the databases in the MySQL instance
`SHOW DATABASES;`

Show tables and specify the database name:
`SHOW TABLES FROM <database_name>;`

Select a database using the USE statement:
`USE database_name;`

Use the DESCRIBE or DESC command followed by the table name to see column names and attributes:
`DESC table_name;`

## Setup Swagger
- https://docs.nestjs.com/openapi/introduction

## NestJS Code Examples
- https://github.com/nestjs/nest/tree/master/sample
