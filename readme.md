# Calendar

This is a fullstack javascipt web app (Single page application) where events can be add/edit/removed and displayed on a calender view.

The events data are stored in mongodb and served by RESTful api endpoints.

View live demo from here: https://calendar-webapp.herokuapp.com/

## How to run locally

Tested with: Ubuntu 20.04, Node: 12.x, Mongodb: 3.6

Clone this repository and enter into it. You need to have NodeJS, yarn and MongoDB installed in your system.

For backend (Express) enter to `api` folder and run:

```bash
yarn
yarn dev

```

For frontend (React) enter to `client` folder and run:

```bash
yarn
yarn start
```

Both for frontend and backend those commands will install dependencies and start the development server.
