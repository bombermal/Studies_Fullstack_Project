# Studies Fullstack

## Description
This project consists in a single page application that represents a bank page. The Backend was built using Symfony and API Platform, the Frontend was built using Angular. 

### Backend
1. Symfony 7 
2. Symfony CLI 5.8.14
3. Composer 2.7.2
4. PHP 8.2.17
5. Docker 26.0.0

### Frontend
1. Angular 14.2.13
2. Node 14.21.3
3. NPM 6.14.18

## Table of Contents
- [Installation](#installation)

## Installation
The frontend can be installed by running the following commands:
```bash
npm install
ng serve

```

The backend can be installed by running the following commands:
```bash
docker compose up
symfony server:start
```
After the start of the PostgresDB inside the docker container, run the following commands to create the database and the tables:
```bash
symfony console make:migration
symfony console doctrine:migrations:migrate
```


