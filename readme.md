# Calendar

This is a fullstack JavaScipt web app (written in TypeScript) where events can be add/edit/removed and displayed on a calender view (React frontend). The events data are stored in a PostgreSQL database and served by RESTful api endpoints (NestJS backend).


## How to run locally

Tested with: Ubuntu 20.04, Node: 12.x, PostgreSQL 12.x

Clone this repository and enter into it. You need to have NodeJS, yarn and PostgreSQL installed in your system. Both for frontend and backend the following commands will install dependencies and start the development server:

### Backend
For backend (NestJS) enter to `api` folder and create a `.env` file populated with the environment variables of your database name and access credentials. There is a `.env.sample` file which can be used as a starting point. Then for the first time run:

```bash
yarn
yarn migration:run
yarn start:dev
```
Backend swagger api doc: http://localhost:5000/api/docs/

### Frontend
For frontend (React) enter to `client` folder and run:

```bash
yarn
yarn start
```
React dev server: http://localhost:3000/
