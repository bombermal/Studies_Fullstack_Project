# Start

This document represents my thinking process and the steps I took to build the project. It will be updated as I progress through the project.

## 1. Project Overview

This project consists in a single page application that represents a bank page. The page will have a login form, a list of transactions and a balance. The transactions will be fetched from an API and the balance will be calculated based on the transactions.

Must contain:
1 - A database ( Mysql )
2 - An API ( API-Platform)
3 - A backend ( Sympfony )
4 - A frontend ( Angular )


## 2. Rules

Before starting the project I need to define some rules that will guide me through the project.

### 2.1 - Database
    
- Transactions:
    - Client
    - Origin Account
    - Destination Account
    - Type
        - Debit
        - Credit
    - Status
        - Open
        - Processing
        - Finalized

- Clients:
    - Accounts
        - Account 1
        &vellip;
        - Account N

- Transactions history:
    - Status

### 2.2 - API

Download [API Platform](https://github.com/api-platform/api-platform/releases/tag/v3.2.16) source code.

run the following commands:

```bash
docker compose build --no-cache
docker compose up -d
```

&vellip;

### 2.3 - Backend

1 - Install [Docker](https://docs.docker.com/engine/install/ubuntu/)
2 - Install [PHP](https://www.digitalocean.com/community/tutorials/how-to-install-php-8-1-and-set-up-a-local-development-environment-on-ubuntu-22-04)
3 - Install Apache, nodejs, npm and other components:
```bash
sudo apt install apache2 nodejs npm apt-transport-https
sudo apt-get install -y php8.1-cli php8.1-common php8.1-mysql php8.1-zip php8.1-gd php8.1-mbstring php8.1-curl php8.1-xml php8.1-bcmath php8.1-pgsql libapache2-mod-php8.1 php8.1-intl
sudo systemctl restart apache2
```
4 - Install [Composer](https://getcomposer.org/download/)
5 - Install [Symfony](https://symfony.com/download)
6 - Start a new project
```bash
symfony new --version=6.2 --webapp --docker --dir=simplebank
```
&vellip;

### 2.4 - Frontend

&vellip;

## 3. Database

Database design and creation.

Based on the rules defined in the previous section, I created this diagram:

![Database Diagram](doc_images/database_diagram.png)