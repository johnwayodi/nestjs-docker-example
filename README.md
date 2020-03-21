## Description

Example Server example.
Authentication using passport and passport-jwt.
Docker Containerization

## Installation

Clone the repository `https://github.com/johnwayodi/nest-passport-jwt-example.git`

```bash
$ git clone https://github.com/johnwayodi/nest-passport-jwt-example.git
$ cd nest-passport-jwt-example && yarn install
```

## Database Setup

The application uses PostgreSQL as the database provider.

Create a `.env.development` file on the root folder of the project.
file and set the variables accordingly

```bash
APP_PORT=
APP_SECRET=
DB_HOST=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
```

## Running the app

```bash
# development
$ yarn start:dev

# watch mode
$ yarn start:debug

# production mode
$ yarn start:prod
```

## Dockerized Application

Create a `.env` file and set the appropiate variables for production server.

```bash
#production variables
NODE_ENV=
APP_PORT=
APP_SECRET=
DB_HOST=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=

# Docker Stuff
COMPOSE_PROJECT_NAME=
APP_CONTAINER_NAME=
APP_IMAGE_NAME=
DB_CONTAINER_NAME=
```

To create all containers and run production ready app, ensure **Docker** is installed.

On the projects root, run the following command:

```bash
# production server
$ docker-compose up
```

## Testing the app

Once the server is started, documentation for the API is available on `localhost:{APP_PORT}/apidocs`

## Test

Create a `.env.testing` file and set the appropiate variables for testing server using format of the sample environment file.

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
