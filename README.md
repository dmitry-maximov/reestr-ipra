# Reestr-ipra 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

Portal for the register of organizations performing an individual program of rehabilitation and habilitation of the disabled (disabled children) (IPRA). The portal consists of two parts: client and server. The client side is written using React. The server part is implemented using node js + express js, data storage is implemented using postgreSql.


https://user-images.githubusercontent.com/33220382/162165325-0cd3449d-dace-4136-868a-da3e96378014.mp4

https://user-images.githubusercontent.com/33220382/162165884-099100b6-16d5-44f5-b827-9d28e43b9b72.mp4

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the client-app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run dev`

Runs the server-app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

## Deployment using docker and docker-compose

### Requirements:
* docker >= 17.12.0+
* docker-compose

### Quick Start
* Clone or download this repository
* Go inside of directory
* Run this command `docker-compose up -d`

### Access to postgres: 
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** root (as a default)

### Access to PgAdmin: 
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)

### Access to Server API: 
* **URL:** `http://localhost:5000`

### Access to Client App: 
* **URL:** `http://localhost:3000`
