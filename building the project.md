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
sudo apt install apache2
sudo apt install symfony-cli
sudo apt install php8.3-xml
sudo apt install nodejs
sudo apt install npm

docker compose build --no-cache
docker compose up -d
```

&vellip;

### 2.3 - Backend

&vellip;

### 2.4 - Frontend

&vellip;

## 3. Database

Database design and creation.

Based on the rules defined in the previous section, I created this diagram:

![Database Diagram](doc_images/database_diagram.png)