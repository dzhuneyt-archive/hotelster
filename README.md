# CI build status

[![CircleCI](https://circleci.com/gh/Dzhuneyt/hotel-room-booking.svg?style=svg)](https://circleci.com/gh/Dzhuneyt/hotel-room-booking)

# Screenshots

![Screenshot of the product](https://i.imgur.com/cqx7btF.png)
![Screenshot of the product](https://i.imgur.com/CpeZwIF.png)
![Screenshot of the product](https://i.imgur.com/URZiNfd.png)
![Screenshot of the product](https://i.imgur.com/baAijvk.png)

# Requirements

NodeJS, NPM and PHP

# Development

## Configure DB credentials

Copy `.env.example` to `.env` and configure DB credentials for Laravel


## Start a development environment

    npm run dev
    
When all the build and testing process finishes, open http://localhost:4200
    
The above command will:
* Install backend and frontend dependencies
* Seed the database
* Start a lite server for the REST APIs (Laravel)
* Execute frontend unit tests
* Build the frontend
* Start a lite server for the frontend (Angular)


## Util commands


### Install backend dependencies

    php composer.phar install

### Migrate and seed the database

    composer dump-autoload && php artisan migrate:refresh --seed
    
### Start the lite server for REST APIs

    composer serve
    
### Install frontend dependencies

    cd frontend && npm install
    
### Start the frontend lite server

    cd frontend && npm run start

Open http://localhost:4200

# Contributing

## Code style

Code style should follow PSR-1 and PSR-2 practices for PHP files and the [Angular code style guide](https://angular.io/guide/styleguide) for the frontend parts.
