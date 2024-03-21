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