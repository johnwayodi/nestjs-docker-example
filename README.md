## Description

Backend Server example. Authentication using passport and passport-jwt.

## Installation

Clone the repository `https://github.com/johnwayodi/nest-passport-jwt-example.git`

```bash
$ git clone https://github.com/johnwayodi/nest-passport-jwt-example.git
$ cd nest-passport-jwt-example && yarn install
```

## Database Setup

The application uses PostgreSQL as the database provider and Sequelize as the as the database driver.

Create a `.env` file on the root folder of the project.
file and set the variables accordingly

```bash
NODE_ENV=
APP_PORT=
APP_SECRET=
DB_HOST=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testing the app

The API can be accessed `localhost:{APP_PORT}/api/v1` and exposes the following endpoints:

1. #### Auth Endpoints

   The `/auth` endpoint allow the registration and login of users.

   <table style="width:100%">
     <tr>
       <td>POST</td>
       <td>/auth/register</td>
       <td>Register new User</td>
     </tr>
     <tr>
       <td>POST</td>
       <td>/auth/login</td>
       <td>Login a User</td>
     </tr>
   </table>

   Register User Payload Example:

   ```json
   {
     "username": "",
     "email": "",
     "password": ""
   }
   ```

   Login Payload Example:

   ```json
   {
     "username": "",
     "password": ""
   }
   ```

1) #### User Endpoints
   The `/users` endpoint allow the registration and login of users. Secured with JWT token
   <table style="width:100%">
     <tr>
       <td>POST</td>
       <td>/users</td>
       <td>Create a new User</td>
     </tr>
     <tr>
       <td>GET</td>
       <td>/users</td>
       <td>Get all Users</td>
     </tr>
     <tr>
       <td>GET</td>
       <td>/users/:id</td>
       <td>Get one User</td>
     </tr>
     <tr>
       <td>POST</td>
       <td>/users/delete</td>
       <td>Remove a User</td>
     </tr>
   </table>

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
