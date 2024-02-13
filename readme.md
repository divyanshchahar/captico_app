# VIRTUAL STORE

## Prerequisite

1. [Node](https://nodejs.org/en)
2. [MongoDB](https://www.mongodb.com/)

## How to setup the app Locally

> To run this app locally you will need to create **environment variables**, setup a **MongoDB Database** and setup a **react app** and **express API**

### 1. Build the app locally

```
yarn
```

### 2. Setup Environemnt Variables for client

Make a `.env` file in the `../client/` with the following content

```
VITE_ORIGIN_URL = URL of the backend
```

For refrence look at `./client/.env.example`

### 3. Setup Environment Variables for server

```
PORT = port number on which the backend will run

DATABASE = URL of MongoDB Database

ACESS_TOKEN_SECRET = Secret for acess token

REFRESH_TOKEN_SECRET = Secret for refresh token

ORIGIN = URL of react app
```

For refrence look at `./server/.env.example`

## Running the app in development environment

```
yarn dev
```
